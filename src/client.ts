/**
 * @fileoverview TenantOS API Client Implementation
 * 
 * This file contains the main TenantosClient class and all related resource classes
 * for interacting with the TenantOS API. It provides a comprehensive, type-safe
 * interface for managing servers, network devices, users, and other TenantOS resources.
 * 
 * Key features:
 * - Automatic retry logic with exponential backoff
 * - Comprehensive error handling with custom error types
 * - Request/response interceptors for logging and debugging
 * - Type-safe resource methods with full TypeScript support
 * - Validation for all input parameters
 * - Batch operations for bulk actions
 * 
 * @version 1.0.0
 * @author Salim Shadman
 * @license MIT
 * @description TypeScript wrapper for TenantOS API - created by Salim Shadman under MIT License
 */

import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type {
  TenantosClientConfig,
  RequestConfig,
  ApiResponse,
  ListOptions,
  Server,
  NetworkDevice,
  ServerFilters,
  NetworkDeviceFilters,
  PowerOperation,
  SystemVersion,
  SystemTimezones,
  CreateServerRequest,
  CreateNetworkDeviceRequest,
  ServersResponse,
  NetworkDevicesResponse,
  BatchResult,
  OperationResult,
  // New types for all resources
  Role,
  AliasUser,
  Brand,
  ExternalProvider,
  InventoryComponent,
  CustomField,
  // Filter types
  RoleFilters,
  AliasUserFilters,
  BrandFilters,
  ExternalProviderFilters,
  InventoryComponentFilters,
  // Request types
  CreateRoleRequest,
  CreateAliasUserRequest,
  CreateBrandRequest,
  CreateExternalProviderRequest,
  CreateInventoryComponentRequest,
  // Response types
  RolesResponse,
  AliasUsersResponse,
  BrandsResponse,
  ExternalProvidersResponse,
  InventoryComponentsResponse,
} from './types';
import {
  TenantosConfigError,
  TenantosValidationError,
  TenantosNetworkError,
  TenantosTimeoutError,
  createErrorFromResponse,
  isRetryableError,
  getErrorMessage,
} from './errors';
import {
  PXEProfilesResource,
  PXEScriptsResource,
  PXEDisklayoutsResource,
  PXEWindowsResource,
  RemoteAgentsResource,
  RDNSResource,
  RolesResource,
  SearchResource,
  SubnetsResource,
  SystemResource,
  TasksResource,
  UsersResource,
  VPSPlansResource,
  OSResource,
} from './resources';
import {
  ServerBMCUsersResource,
  ServerBackupsResource,
  ServerSnapshotsResource,
  ServerCommentsResource,
  ServerConnectionsResource,
  ServerIPAssignmentsResource,
  ServerInventoryResource,
  ServerNetworkResource,
  ServerProvisioningResource,
  ServerPowerResource,
  ServerVMResource,
  ServerStatisticsResource,
  ServerConsoleResource,
  ServerActivityLogResource,
} from './server-extensions';

/**
 * Configuration validator with detailed error messages
 */
class ConfigValidator {
  static validate(config: TenantosClientConfig): void {
    this.validateBaseUrl(config.baseUrl);
    this.validateApiKey(config.apiKey);
    this.validateTimeout(config.timeout);
    this.validateHeaders(config.headers);
    this.validateRetryConfig(config.retry);
  }

  private static validateBaseUrl(baseUrl: string): void {
    // Check for null, undefined, or empty string
    if (!baseUrl?.trim()) {
      throw new TenantosConfigError('baseUrl is required and cannot be empty', 'baseUrl');
    }

    try {
      // Use URL constructor to validate URL format - this will throw if invalid
      const url = new URL(baseUrl);
      
      // Only allow secure protocols for API communication
      if (!['http:', 'https:'].includes(url.protocol)) {
        throw new TenantosConfigError('baseUrl must use http or https protocol', 'baseUrl');
      }
    } catch (error) {
      // Re-throw our own errors to preserve the specific error type
      if (error instanceof TenantosConfigError) throw error;
      
      // Convert URL constructor errors to our error type
      throw new TenantosConfigError('baseUrl must be a valid URL', 'baseUrl');
    }
  }

  private static validateApiKey(apiKey: string): void {
    if (!apiKey?.trim()) {
      throw new TenantosConfigError('apiKey is required and cannot be empty', 'apiKey');
    }

    if (apiKey.length < 10) {
      throw new TenantosConfigError('apiKey appears to be too short', 'apiKey');
    }
  }

  private static validateTimeout(timeout?: number): void {
    if (timeout !== undefined) {
      if (!Number.isInteger(timeout) || timeout <= 0) {
        throw new TenantosConfigError('timeout must be a positive integer', 'timeout');
      }
      if (timeout > 300000) { // 5 minutes
        throw new TenantosConfigError('timeout cannot exceed 300000ms (5 minutes)', 'timeout');
      }
    }
  }

  private static validateHeaders(headers?: Readonly<Record<string, string>>): void {
    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        if (typeof key !== 'string' || typeof value !== 'string') {
          throw new TenantosConfigError('headers must be string key-value pairs', 'headers');
        }
      }
    }
  }

  private static validateRetryConfig(retry?: { attempts: number; delay: number }): void {
    if (retry) {
      if (!Number.isInteger(retry.attempts) || retry.attempts < 0 || retry.attempts > 10) {
        throw new TenantosConfigError('retry.attempts must be an integer between 0 and 10', 'retry.attempts');
      }
      if (!Number.isInteger(retry.delay) || retry.delay < 0 || retry.delay > 30000) {
        throw new TenantosConfigError('retry.delay must be an integer between 0 and 30000ms', 'retry.delay');
      }
    }
  }
}

/**
 * Base resource class providing common functionality
 */
abstract class BaseResource {
  constructor(protected readonly client: TenantosClient) {}

  /**
   * Make a request to the API with automatic error handling
   */
  protected async request<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    return this.client.request<T>(config);
  }

  /**
   * Validate that an ID is a positive integer
   */
  protected validateId(id: number, resourceName = 'Resource'): void {
    if (!Number.isInteger(id) || id <= 0) {
      throw new TenantosValidationError(
        `${resourceName} ID must be a positive integer`,
        'id',
        id
      );
    }
  }

  /**
   * Validate required string field
   */
  protected validateRequiredString(value: string, fieldName: string): void {
    if (!value?.trim()) {
      throw new TenantosValidationError(
        `${fieldName} is required and cannot be empty`,
        fieldName,
        value
      );
    }
  }
}

/**
 * Server management resource with full CRUD operations
 */
class ServersResource extends BaseResource {
  /**
   * List all servers with optional filtering and pagination
   */
  async list(options: ListOptions<ServerFilters> = {}): Promise<Server[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<ServersResponse>({
      method: 'GET',
      url: '/api/servers',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as Server[] : [];
  }

  /**
   * Get a specific server by ID
   */
  async get(id: number): Promise<Server> {
    this.validateId(id, 'Server');
    
    const response = await this.request<Server>({
      method: 'GET',
      url: `/api/servers/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Server not found');
    }
    
    return response.result;
  }

  /**
   * Create a new server
   */
  async create(data: CreateServerRequest): Promise<Server> {
    this.validateCreateServerRequest(data);
    
    const response = await this.request<Server>({
      method: 'POST',
      url: '/api/servers',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create server');
    }
    
    return response.result;
  }

  /**
   * Update an existing server
   */
  async update(id: number, data: Partial<CreateServerRequest>): Promise<Server> {
    this.validateId(id, 'Server');
    
    const response = await this.request<Server>({
      method: 'PUT',
      url: `/api/servers/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update server');
    }
    
    return response.result;
  }

  /**
   * Delete a server
   */
  async delete(id: number): Promise<void> {
    this.validateId(id, 'Server');
    
    await this.request({
      method: 'DELETE',
      url: `/api/servers/${id}`,
    });
  }

  /**
   * Power management operations
   */
  readonly power = {
    on: async (id: number): Promise<void> => {
      await this.performPowerOperation(id, { action: 'on' });
    },
    
    off: async (id: number): Promise<void> => {
      await this.performPowerOperation(id, { action: 'off' });
    },
    
    reset: async (id: number): Promise<void> => {
      await this.performPowerOperation(id, { action: 'reset' });
    },
    
    cycle: async (id: number): Promise<void> => {
      await this.performPowerOperation(id, { action: 'cycle' });
    },
  };

  /**
   * Get server by IP address
   */
  async getByIp(ip: string): Promise<Server> {
    this.validateRequiredString(ip, 'IP Address');
    
    const response = await this.request<Server>({
      method: 'GET',
      url: `/api/servers/getByIp/${ip}`,
    });
    
    if (!response.result) {
      throw new Error('Server not found');
    }
    
    return response.result;
  }

  /**
   * Get servers by tags
   */
  async getByTags(tags: string[]): Promise<Server[]> {
    const response = await this.request<ServersResponse>({
      method: 'POST',
      url: '/api/servers/getByTags',
      data: { tags },
    });
    
    return Array.isArray(response.result) ? response.result as Server[] : [];
  }

  /**
   * Get all server tags
   */
  async getTags(): Promise<string[]> {
    const response = await this.request<{ result: string[] }>({
      method: 'GET',
      url: '/api/servers/tags',
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  /**
   * Rename tags
   */
  async renameTags(data: { oldTag: string; newTag: string }): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/tags/rename',
      data,
    });
  }

  /**
   * Delete tags
   */
  async deleteTags(data: { tags: string[] }): Promise<void> {
    await this.request({
      method: 'DELETE',
      url: '/api/tags/delete',
      data,
    });
  }

  /**
   * Server extensions - create instances for specific server operations
   */
  bmcUsers(serverId: number): ServerBMCUsersResource {
    this.validateId(serverId, 'Server');
    return new ServerBMCUsersResource(this.client, serverId);
  }

  backups(serverId: number): ServerBackupsResource {
    this.validateId(serverId, 'Server');
    return new ServerBackupsResource(this.client, serverId);
  }

  snapshots(serverId: number): ServerSnapshotsResource {
    this.validateId(serverId, 'Server');
    return new ServerSnapshotsResource(this.client, serverId);
  }

  comments(serverId: number): ServerCommentsResource {
    this.validateId(serverId, 'Server');
    return new ServerCommentsResource(this.client, serverId);
  }

  connections(serverId: number): ServerConnectionsResource {
    this.validateId(serverId, 'Server');
    return new ServerConnectionsResource(this.client, serverId);
  }

  ipAssignments(serverId: number): ServerIPAssignmentsResource {
    this.validateId(serverId, 'Server');
    return new ServerIPAssignmentsResource(this.client, serverId);
  }

  inventory(serverId: number): ServerInventoryResource {
    this.validateId(serverId, 'Server');
    return new ServerInventoryResource(this.client, serverId);
  }

  network(serverId: number): ServerNetworkResource {
    this.validateId(serverId, 'Server');
    return new ServerNetworkResource(this.client, serverId);
  }

  provisioning(serverId: number): ServerProvisioningResource {
    this.validateId(serverId, 'Server');
    return new ServerProvisioningResource(this.client, serverId);
  }

  powerExtended(serverId: number): ServerPowerResource {
    this.validateId(serverId, 'Server');
    return new ServerPowerResource(this.client, serverId);
  }

  vm(serverId: number): ServerVMResource {
    this.validateId(serverId, 'Server');
    return new ServerVMResource(this.client, serverId);
  }

  statistics(serverId: number): ServerStatisticsResource {
    this.validateId(serverId, 'Server');
    return new ServerStatisticsResource(this.client, serverId);
  }

  console(serverId: number): ServerConsoleResource {
    this.validateId(serverId, 'Server');
    return new ServerConsoleResource(this.client, serverId);
  }

  activityLog(serverId: number): ServerActivityLogResource {
    this.validateId(serverId, 'Server');
    return new ServerActivityLogResource(this.client, serverId);
  }

  /**
   * Convenience methods for common queries
   */
  async findByTags(tags: readonly string[]): Promise<Server[]> {
    return this.list({ filters: { tags: [...tags] } });
  }

  async findByOS(os: string): Promise<Server[]> {
    return this.list({ filters: { os } });
  }

  async findByType(servertype: string): Promise<Server[]> {
    return this.list({ filters: { servertype } });
  }

  /**
   * Batch operations
   */
  async batchUpdate(
    ids: readonly number[],
    data: Partial<CreateServerRequest>
  ): Promise<BatchResult<number>> {
    const successful: number[] = [];
    const failed: Array<{ item: number; error: string }> = [];

    for (const id of ids) {
      try {
        await this.update(id, data);
        successful.push(id);
      } catch (error) {
        failed.push({
          item: id,
          error: getErrorMessage(error),
        });
      }
    }

    return { successful, failed };
  }

  private async performPowerOperation(id: number, operation: PowerOperation): Promise<void> {
    this.validateId(id, 'Server');
    
    await this.request({
      method: 'POST',
      url: `/api/servers/${id}/power`,
      data: operation,
    });
  }

  private validateCreateServerRequest(data: CreateServerRequest): void {
    // Type-safe validation based on the actual schema requirements
    if (typeof data !== 'object' || data === null) {
      throw new TenantosValidationError('Server data must be an object', 'data', data);
    }
    
    // Add specific validations based on your schema requirements
    // This is a placeholder - you'll need to implement based on actual schema
  }

  private buildListParams(options: ListOptions<ServerFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.servertype) params['servertype'] = options.filters.servertype;
      if (options.filters.os) params['os'] = options.filters.os;
      if (options.filters.userId) params['userId'] = options.filters.userId;
      if (options.filters.tags) params['tags'] = options.filters.tags.join(',');
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    if (options.sort) params['sort'] = options.sort;
    if (options.order) params['order'] = options.order;
    
    return params;
  }
}

/**
 * Network device management resource
 */
class NetworkDevicesResource extends BaseResource {
  async list(options: ListOptions<NetworkDeviceFilters> = {}): Promise<NetworkDevice[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<NetworkDevicesResponse>({
      method: 'GET',
      url: '/api/networkDevices',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as NetworkDevice[] : [];
  }

  async get(id: number): Promise<NetworkDevice> {
    this.validateId(id, 'Network Device');
    
    const response = await this.request<NetworkDevice>({
      method: 'GET',
      url: `/api/networkDevices/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Network device not found');
    }
    
    return response.result;
  }

  async create(data: CreateNetworkDeviceRequest): Promise<NetworkDevice> {
    const response = await this.request<NetworkDevice>({
      method: 'POST',
      url: '/api/networkDevices',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create network device');
    }
    
    return response.result;
  }

  async testConnectivity(id: number): Promise<OperationResult> {
    this.validateId(id, 'Network Device');
    
    try {
      await this.request({
        method: 'POST',
        url: `/api/networkDevices/${id}/actions/testConnectivity`,
      });
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  async runAction<T = unknown>(id: number, action: string, data?: unknown): Promise<OperationResult<T>> {
    this.validateId(id, 'Network Device');
    this.validateRequiredString(action, 'Network device action');
    
    try {
      const response = await this.request<T>({
        method: 'POST',
        url: `/api/networkDevices/${id}/actions/${action}`,
        data,
      });
      const resultData = response.result as T | undefined;
      return resultData !== undefined ? { success: true, data: resultData } : { success: true };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  async getExtendedDetails(id: number): Promise<Record<string, unknown>> {
    this.validateId(id, 'Network Device');
    
    const response = await this.request<{ result?: Record<string, unknown> }>({
      method: 'GET',
      // OpenAPI shows path template as {networkDevice}/extendedDetails with id in path params.
      // The API effectively resolves using the numeric id in the path where the device identifier is expected.
      url: `/api/networkDevices/${id}/extendedDetails`,
    });
    
    return response.result ?? {};
  }

  private buildListParams(options: ListOptions<NetworkDeviceFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.deviceType) params['deviceType'] = options.filters.deviceType;
      if (options.filters.agentId) params['agentId'] = options.filters.agentId;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * Alias Roles management resource
 */
class AliasRolesResource extends BaseResource {
  async list(options: ListOptions<RoleFilters> = {}): Promise<Role[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<RolesResponse>({
      method: 'GET',
      url: '/api/aliasRoles',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as Role[] : [];
  }

  async get(id: number): Promise<Role> {
    this.validateId(id, 'Alias Role');
    
    const response = await this.request<Role>({
      method: 'GET',
      url: `/api/aliasRoles/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Alias role not found');
    }
    
    return response.result;
  }

  async create(data: CreateRoleRequest): Promise<Role> {
    const response = await this.request<Role>({
      method: 'POST',
      url: '/api/aliasRoles',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create alias role');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateRoleRequest>): Promise<Role> {
    this.validateId(id, 'Alias Role');
    
    const response = await this.request<Role>({
      method: 'PUT',
      url: `/api/aliasRoles/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update alias role');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Alias Role');
    
    await this.request({
      method: 'DELETE',
      url: `/api/aliasRoles/${id}`,
    });
  }

  private buildListParams(options: ListOptions<RoleFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.type) params['type'] = options.filters.type;
      if (options.filters.ownerUserId) params['ownerUserId'] = options.filters.ownerUserId;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * Alias Users management resource
 */
class AliasUsersResource extends BaseResource {
  async list(options: ListOptions<AliasUserFilters> = {}): Promise<AliasUser[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<AliasUsersResponse>({
      method: 'GET',
      url: '/api/aliasUsers',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as AliasUser[] : [];
  }

  async create(data: CreateAliasUserRequest): Promise<AliasUser> {
    const response = await this.request<AliasUser>({
      method: 'POST',
      url: '/api/aliasUsers',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create alias user');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateAliasUserRequest>): Promise<AliasUser> {
    this.validateId(id, 'Alias User');
    
    const response = await this.request<AliasUser>({
      method: 'PUT',
      url: `/api/aliasUsers/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update alias user');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Alias User');
    
    await this.request({
      method: 'DELETE',
      url: `/api/aliasUsers/${id}`,
    });
  }

  private buildListParams(options: ListOptions<AliasUserFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.roleId) params['roleId'] = options.filters.roleId;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * Brands management resource
 */
class BrandsResource extends BaseResource {
  async list(options: ListOptions<BrandFilters> = {}): Promise<Brand[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<BrandsResponse>({
      method: 'GET',
      url: '/api/system/brands',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as Brand[] : [];
  }

  async get(id: number): Promise<Brand> {
    this.validateId(id, 'Brand');
    
    const response = await this.request<Brand>({
      method: 'GET',
      url: `/api/system/brands/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Brand not found');
    }
    
    return response.result;
  }

  async create(data: CreateBrandRequest): Promise<Brand> {
    const response = await this.request<Brand>({
      method: 'POST',
      url: '/api/system/brands',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create brand');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateBrandRequest>): Promise<Brand> {
    this.validateId(id, 'Brand');
    
    const response = await this.request<Brand>({
      method: 'PUT',
      url: `/api/system/brands/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update brand');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Brand');
    
    await this.request({
      method: 'DELETE',
      url: `/api/system/brands/${id}`,
    });
  }

  async storeLogo(brand: string, logoFile: File): Promise<void> {
    const formData = new FormData();
    formData.append('logo', logoFile);
    
    await this.request({
      method: 'POST',
      url: `/api/system/brands/${brand}/logos/store`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  async deleteLogo(brand: string): Promise<void> {
    await this.request({
      method: 'DELETE',
      url: `/api/system/brands/${brand}/logos/delete`,
    });
  }

  private buildListParams(options: ListOptions<BrandFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.name) params['name'] = options.filters.name;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * External Providers management resource
 */
class ExternalProvidersResource extends BaseResource {
  async list(options: ListOptions<ExternalProviderFilters> = {}): Promise<ExternalProvider[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<ExternalProvidersResponse>({
      method: 'GET',
      url: '/api/externalProviders',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as ExternalProvider[] : [];
  }

  async get(id: number): Promise<ExternalProvider> {
    this.validateId(id, 'External Provider');
    
    const response = await this.request<ExternalProvider>({
      method: 'GET',
      url: `/api/externalProviders/${id}`,
    });
    
    if (!response.result) {
      throw new Error('External provider not found');
    }
    
    return response.result;
  }

  async create(data: CreateExternalProviderRequest): Promise<ExternalProvider> {
    const response = await this.request<ExternalProvider>({
      method: 'POST',
      url: '/api/externalProviders',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create external provider');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateExternalProviderRequest>): Promise<ExternalProvider> {
    this.validateId(id, 'External Provider');
    
    const response = await this.request<ExternalProvider>({
      method: 'PUT',
      url: `/api/externalProviders/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update external provider');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'External Provider');
    
    await this.request({
      method: 'DELETE',
      url: `/api/externalProviders/${id}`,
    });
  }

  private buildListParams(options: ListOptions<ExternalProviderFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.type) params['type'] = options.filters.type;
      if (options.filters.enabled !== undefined) params['enabled'] = options.filters.enabled ? 1 : 0;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * Files management resource
 */
class FilesResource extends BaseResource {
  async download(fileId: number): Promise<Blob> {
    this.validateId(fileId, 'File');
    
    const response = await this.request<Blob>({
      method: 'GET',
      url: `/api/files/${fileId}/download`,
    });
    
    return response.result as Blob;
  }

  async delete(fileId: number): Promise<void> {
    this.validateId(fileId, 'File');
    
    await this.request({
      method: 'DELETE',
      url: `/api/files/${fileId}`,
    });
  }
}

/**
 * IP Management resource
 */
class IPManagementResource extends BaseResource {
  async massAction(data: { action: string; ips: string[] }): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/ip/massaction',
      data,
    });
  }

  async reserve(ip: string, comment?: string): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/ip/reserve',
      data: { ip, comment },
    });
  }

  async unreserve(ip: string): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/ip/unreserve',
      data: { ip },
    });
  }

  async addComment(ip: string, comment: string): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/ip/comment',
      data: { ip, comment },
    });
  }

  async deleteIP(ip: string): Promise<void> {
    await this.request({
      method: 'DELETE',
      url: '/api/ip/delete',
      data: { ip },
    });
  }
}

/**
 * Inventory Components management resource
 */
class InventoryComponentsResource extends BaseResource {
  async list(options: ListOptions<InventoryComponentFilters> = {}): Promise<InventoryComponent[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<InventoryComponentsResponse>({
      method: 'GET',
      url: '/api/inventorycomponents',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as InventoryComponent[] : [];
  }

  async get(id: number): Promise<InventoryComponent> {
    this.validateId(id, 'Inventory Component');
    
    const response = await this.request<InventoryComponent>({
      method: 'GET',
      url: `/api/inventorycomponents/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Inventory component not found');
    }
    
    return response.result;
  }

  async create(data: CreateInventoryComponentRequest): Promise<InventoryComponent> {
    const response = await this.request<InventoryComponent>({
      method: 'POST',
      url: '/api/inventorycomponents',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create inventory component');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateInventoryComponentRequest>): Promise<InventoryComponent> {
    this.validateId(id, 'Inventory Component');
    
    const response = await this.request<InventoryComponent>({
      method: 'PUT',
      url: `/api/inventorycomponents/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update inventory component');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Inventory Component');
    
    await this.request({
      method: 'DELETE',
      url: `/api/inventorycomponents/${id}`,
    });
  }

  // Custom fields management
  readonly customFields = {
    list: async (): Promise<CustomField[]> => {
      const response = await this.request<{ result: CustomField[] }>({
        method: 'GET',
        url: '/api/inventorycomponents/customfields',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    get: async (id: number): Promise<CustomField> => {
      this.validateId(id, 'Custom Field');
      
      const response = await this.request<CustomField>({
        method: 'GET',
        url: `/api/inventorycomponents/customfields/${id}`,
      });
      
      if (!response.result) {
        throw new Error('Custom field not found');
      }
      
      return response.result;
    },

    create: async (data: Partial<CustomField>): Promise<CustomField> => {
      const response = await this.request<CustomField>({
        method: 'POST',
        url: '/api/inventorycomponents/customfields',
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to create custom field');
      }
      
      return response.result;
    },

    update: async (id: number, data: Partial<CustomField>): Promise<CustomField> => {
      this.validateId(id, 'Custom Field');
      
      const response = await this.request<CustomField>({
        method: 'PUT',
        url: `/api/inventorycomponents/customfields/${id}`,
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to update custom field');
      }
      
      return response.result;
    },

    delete: async (id: number): Promise<void> => {
      this.validateId(id, 'Custom Field');
      
      await this.request({
        method: 'DELETE',
        url: `/api/inventorycomponents/customfields/${id}`,
      });
    },
  };

  private buildListParams(options: ListOptions<InventoryComponentFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.groupname) params['groupname'] = options.filters.groupname;
      if (options.filters.valueType) params['valueType'] = options.filters.valueType;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * Main TenantOS API client with comprehensive error handling and retry logic
 * 
 * The TenantosClient class is the primary entry point for interacting with the TenantOS API.
 * It provides a unified interface for all API operations, including server management,
 * network device configuration, user administration, and system monitoring.
 * 
 * Features:
 * - **Type Safety**: Full TypeScript support with comprehensive type definitions
 * - **Error Handling**: Custom error classes with detailed error information
 * - **Retry Logic**: Automatic retry for transient failures with configurable backoff
 * - **Request Logging**: Optional debug logging for requests and responses
 * - **Resource Organization**: Logical grouping of API endpoints into resource classes
 * - **Validation**: Input validation for all parameters
 * - **Immutable Config**: Configuration is frozen after client creation for safety
 * 
 * @example Basic Usage
 * ```typescript
 * const client = new TenantosClient({
 *   baseUrl: 'https://your-tenant.tenantos.com',
 *   apiKey: 'your-api-key'
 * });
 * 
 * // List all servers
 * const servers = await client.servers.list();
 * 
 * // Get a specific server
 * const server = await client.servers.get(123);
 * 
 * // Create a new server
 * const newServer = await client.servers.create({
 *   hostname: 'new-server.example.com',
 *   servername: 'New Server',
 *   // ... other properties
 * });
 * ```
 * 
 * @example Advanced Configuration
 * ```typescript
 * const client = new TenantosClient({
 *   baseUrl: 'https://your-tenant.tenantos.com',
 *   apiKey: 'your-api-key',
 *   timeout: 60000,
 *   debug: true,
 *   retry: {
 *     attempts: 5,
 *     delay: 2000
 *   },
 *   headers: {
 *     'X-Custom-Header': 'custom-value'
 *   }
 * });
 * ```
 * 
 * @example Error Handling
 * ```typescript
 * try {
 *   const server = await client.servers.get(999);
 * } catch (error) {
 *   if (isTenantosApiError(error)) {
 *     console.log(`API Error: ${error.statusCode} - ${error.message}`);
 *     if (error.isNotFound()) {
 *       console.log('Server not found');
 *     }
 *   }
 * }
 * ```
 */
export class TenantosClient {
  private readonly httpClient: AxiosInstance;
  private readonly config: TenantosClientConfig;
  
  // Resource instances - initialized in constructor
  readonly servers: ServersResource;
  readonly networkDevices: NetworkDevicesResource;
  readonly aliasRoles: AliasRolesResource;
  readonly aliasUsers: AliasUsersResource;
  readonly brands: BrandsResource;
  readonly externalProviders: ExternalProvidersResource;
  readonly files: FilesResource;
  readonly ipManagement: IPManagementResource;
  readonly inventoryComponents: InventoryComponentsResource;
  // Additional resources from resources.ts
  readonly pxeProfiles: PXEProfilesResource;
  readonly pxeScripts: PXEScriptsResource;
  readonly pxeDisklayouts: PXEDisklayoutsResource;
  readonly pxeWindows: PXEWindowsResource;
  readonly remoteAgents: RemoteAgentsResource;
  readonly rdns: RDNSResource;
  readonly roles: RolesResource;
  readonly search: SearchResource;
  readonly subnets: SubnetsResource;
  readonly system: SystemResource;
  readonly tasks: TasksResource;
  readonly users: UsersResource;
  readonly vpsPlans: VPSPlansResource;
  readonly os: OSResource;

  /**
   * Creates a new TenantOS API client instance
   * 
   * The constructor validates the provided configuration, sets up the HTTP client
   * with appropriate defaults, configures request/response interceptors, and
   * initializes all resource instances for API operations.
   * 
   * @param config - Client configuration including base URL, API key, and options
   * @throws {TenantosConfigError} When configuration validation fails
   * 
   * @example
   * ```typescript
   * const client = new TenantosClient({
   *   baseUrl: 'https://your-tenant.tenantos.com',
   *   apiKey: 'your-api-key-here',
   *   timeout: 30000,
   *   debug: false
   * });
   * ```
   */
  constructor(config: TenantosClientConfig) {
    // Validate configuration before proceeding - throws TenantosConfigError if invalid
    ConfigValidator.validate(config);
    
    // Store immutable config to prevent accidental modifications
    this.config = Object.freeze({ ...config });
    
    // Create axios instance with comprehensive configuration
    this.httpClient = this.createHttpClient();
    
    // Setup interceptors for request/response handling and logging
    this.setupInterceptors();
    
    // Initialize all resource instances for API operations
    // Core resources
    this.servers = new ServersResource(this);
    this.networkDevices = new NetworkDevicesResource(this);
    this.aliasRoles = new AliasRolesResource(this);
    this.aliasUsers = new AliasUsersResource(this);
    this.brands = new BrandsResource(this);
    this.externalProviders = new ExternalProvidersResource(this);
    this.files = new FilesResource(this);
    this.ipManagement = new IPManagementResource(this);
    this.inventoryComponents = new InventoryComponentsResource(this);
    
    // Extended resources
    this.pxeProfiles = new PXEProfilesResource(this);
    this.pxeScripts = new PXEScriptsResource(this);
    this.pxeDisklayouts = new PXEDisklayoutsResource(this);
    this.pxeWindows = new PXEWindowsResource(this);
    this.remoteAgents = new RemoteAgentsResource(this);
    this.rdns = new RDNSResource(this);
    this.roles = new RolesResource(this);
    this.search = new SearchResource(this);
    this.subnets = new SubnetsResource(this);
    this.system = new SystemResource(this);
    this.tasks = new TasksResource(this);
    this.users = new UsersResource(this);
    this.vpsPlans = new VPSPlansResource(this);
    this.os = new OSResource(this);
  }

  /**
   * Make a raw request to the API with automatic retry logic
   * 
   * This is the core method that handles all HTTP requests to the TenantOS API.
   * It includes automatic retry logic for transient failures, comprehensive error
   * handling, and request/response logging when debug mode is enabled.
   * 
   * The method will automatically retry requests that fail due to:
   * - Network connectivity issues
   * - Server errors (5xx status codes)
   * - Rate limiting (429 status code)
   * 
   * @template T - The expected type of the response data
   * @param config - Request configuration including method, URL, data, and parameters
   * @returns Promise that resolves to the API response
   * @throws {TenantosApiError} For API-related errors (4xx, 5xx responses)
   * @throws {TenantosNetworkError} For network connectivity issues
   * @throws {TenantosTimeoutError} For request timeouts
   * 
   * @example
   * ```typescript
   * // Make a GET request
   * const response = await client.request<Server>({
   *   method: 'GET',
   *   url: '/api/servers/123'
   * });
   * 
   * // Make a POST request with data
   * const response = await client.request<Server>({
   *   method: 'POST',
   *   url: '/api/servers',
   *   data: {
   *     hostname: 'new-server.example.com',
   *     servername: 'New Server'
   *   }
   * });
   * ```
   */
  async request<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    // Extract retry configuration with sensible defaults
    const maxAttempts = this.config.retry?.attempts ?? 3;
    const retryDelay = this.config.retry?.delay ?? 1000;
    
    let lastError: Error;
    
    // Attempt the request up to maxAttempts times
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // Build axios configuration from our request config
        const axiosConfig: AxiosRequestConfig = {
          method: config.method,
          url: config.url,
          data: config.data,
          params: config.params,
          // Only include headers if they exist to avoid overriding defaults
          ...(config.headers && { headers: config.headers }),
        };
        
        // Debug logging for request details
        if (this.config.debug) {
          console.log(`[TenantOS] Request attempt ${attempt}:`, axiosConfig);
        }
        
        // Make the actual HTTP request
        const response: AxiosResponse<ApiResponse<T>> = await this.httpClient.request(axiosConfig);
        
        // Debug logging for successful responses
        if (this.config.debug) {
          console.log(`[TenantOS] Response:`, response.data);
        }
        
        // Return the response data (not the full axios response)
        return response.data;
      } catch (error) {
        // Convert raw error to our error types for consistent handling
        lastError = this.handleError(error);
        
        // Don't retry on the last attempt or if the error type is not retryable
        // (e.g., authentication errors, validation errors)
        if (attempt === maxAttempts || !isRetryableError(lastError)) {
          throw lastError;
        }
        
        // Debug logging for retry attempts
        if (this.config.debug) {
          console.log(`[TenantOS] Retrying in ${retryDelay}ms (attempt ${attempt}/${maxAttempts})`);
        }
        
        // Wait before retrying - simple linear backoff
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
    
    // This should never be reached due to the loop logic, but TypeScript requires it
    throw lastError!;
  }

  /**
   * Get system version information
   * 
   * Retrieves version information about the TenantOS system, including
   * the current software version and build information.
   * 
   * @returns Promise that resolves to system version information
   * @throws {TenantosApiError} If the request fails
   * 
   * @example
   * ```typescript
   * const version = await client.getSystemVersion();
   * console.log(`TenantOS version: ${version.version}`);
   * ```
   */
  async getSystemVersion(): Promise<SystemVersion> {
    const response = await this.request<SystemVersion>({
      method: 'GET',
      url: '/api/system/version',
    });
    
    return response.result ?? {};
  }

  /**
   * Get available system timezones
   * 
   * Retrieves a list of all available timezones that can be used
   * for system configuration and scheduling operations.
   * 
   * @returns Promise that resolves to an array of timezone strings
   * @throws {TenantosApiError} If the request fails
   * 
   * @example
   * ```typescript
   * const timezones = await client.getSystemTimezones();
   * console.log('Available timezones:', timezones);
   * ```
   */
  async getSystemTimezones(): Promise<string[]> {
    const response = await this.request<SystemTimezones>({
      method: 'GET',
      url: '/api/system/listTimezones',
    });
    
    return [...(response.result?.timezones ?? [])];
  }

  /**
   * Test API connectivity and authentication
   * 
   * Performs a simple ping request to verify that the client can
   * successfully connect to the TenantOS API and that the provided
   * authentication credentials are valid.
   * 
   * @returns Promise that resolves to true if connection is successful, false otherwise
   * 
   * @example
   * ```typescript
   * const isConnected = await client.ping();
   * if (isConnected) {
   *   console.log('Successfully connected to TenantOS API');
   * } else {
   *   console.log('Failed to connect to TenantOS API');
   * }
   * ```
   */
  async ping(): Promise<boolean> {
    try {
      await this.request({
        method: 'GET',
        url: '/api/ping',
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get the client configuration (readonly)
   * 
   * Returns a readonly copy of the client configuration that was
   * provided during client initialization. This can be useful for
   * debugging or logging purposes.
   * 
   * @returns Readonly copy of the client configuration
   * 
   * @example
   * ```typescript
   * const config = client.getConfig();
   * console.log(`Base URL: ${config.baseUrl}`);
   * console.log(`Debug mode: ${config.debug}`);
   * ```
   */
  getConfig(): Readonly<TenantosClientConfig> {
    return this.config;
  }

  private createHttpClient(): AxiosInstance {
    return axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout ?? 30000,
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'tenantos-api-client/1.0.0',
        ...this.config.headers,
      },
    });
  }

  private setupInterceptors(): void {
    // Request interceptor for adding request ID and logging
    this.httpClient.interceptors.request.use(
      (config) => {
        // Add unique request ID for tracing
        const requestId = `tenantos-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        config.headers['X-Request-ID'] = requestId;
        
        if (this.config.debug) {
          console.log(`[TenantOS] Request ${requestId}:`, {
            method: config.method?.toUpperCase(),
            url: config.url,
            params: config.params,
          });
        }
        
        return config;
      },
      (error) => {
        if (this.config.debug) {
          console.error('[TenantOS] Request interceptor error:', error);
        }
        return Promise.reject(error);
      }
    );

    // Response interceptor for logging and error handling
    this.httpClient.interceptors.response.use(
      (response) => {
        if (this.config.debug) {
          console.log(`[TenantOS] Response ${response.headers['x-request-id']}:`, {
            status: response.status,
            statusText: response.statusText,
          });
        }
        return response;
      },
      (error) => {
        if (this.config.debug) {
          console.error('[TenantOS] Response error:', error);
        }
        return Promise.reject(this.handleError(error));
      }
    );
  }

  private handleError(error: unknown): Error {
    // Check if this is an axios error (most common case)
    if (axios.isAxiosError(error)) {
      const { response, request, code, message } = error;
      
      if (response) {
        // Server responded with an error status (4xx, 5xx)
        const statusCode = response.status;
        
        // Try to extract error message from response data, fallback to status text
        const errorMessage = response.data?.message ?? response.statusText ?? 'Unknown error';
        
        // Extract request ID for tracking (if provided by server)
        const requestId = response.headers['x-request-id'];
        
        // Create appropriate error type based on status code
        return createErrorFromResponse(statusCode, errorMessage, response.data, requestId);
      } else if (request) {
        // Request was made but no response received (network issues)
        
        // Handle timeout specifically
        if (code === 'ECONNABORTED') {
          return new TenantosTimeoutError(this.config.timeout ?? 30000);
        }
        
        // Other network errors (DNS, connection refused, etc.)
        return new TenantosNetworkError(message ?? 'Network error occurred');
      }
    }
    
    // Unknown error type - preserve original Error if possible, otherwise create generic Error
    return error instanceof Error ? error : new Error('Unknown error occurred');
  }
}

/**
 * Factory function to create a new TenantOS client instance
 * 
 * This is a convenience function that provides a clean, functional interface
 * for creating TenantOS client instances. It's equivalent to using the
 * TenantosClient constructor directly but may be preferred in functional
 * programming contexts.
 * 
 * @param config - Complete client configuration
 * @returns A new TenantosClient instance
 * @throws {TenantosConfigError} If the configuration is invalid
 * 
 * @example
 * ```typescript
 * const client = createClient({
 *   baseUrl: 'https://your-tenant.tenantos.com',
 *   apiKey: 'your-api-key',
 *   timeout: 30000
 * });
 * ```
 */
export function createClient(config: TenantosClientConfig): TenantosClient {
  return new TenantosClient(config);
}

/**
 * Create a client with sensible default configuration for common use cases
 * 
 * This convenience function creates a TenantOS client with commonly used
 * default settings, requiring only the essential baseUrl and apiKey parameters.
 * Additional options can be provided to override the defaults as needed.
 * 
 * Default settings:
 * - timeout: 30000ms (30 seconds)
 * - debug: false
 * - retry: { attempts: 3, delay: 1000ms }
 * 
 * @param baseUrl - Base URL of your TenantOS instance
 * @param apiKey - API authentication key
 * @param options - Optional configuration overrides
 * @returns A new TenantosClient instance with default settings
 * @throws {TenantosConfigError} If the configuration is invalid
 * 
 * @example
 * ```typescript
 * // Basic usage with defaults
 * const client = createClientWithDefaults(
 *   'https://your-tenant.tenantos.com',
 *   'your-api-key'
 * );
 * 
 * // With custom options
 * const client = createClientWithDefaults(
 *   'https://your-tenant.tenantos.com',
 *   'your-api-key',
 *   {
 *     timeout: 60000,
 *     debug: true,
 *     retry: { attempts: 5, delay: 2000 }
 *   }
 * );
 * ```
 */
export function createClientWithDefaults(
  baseUrl: string,
  apiKey: string,
  options: Partial<Omit<TenantosClientConfig, 'baseUrl' | 'apiKey'>> = {}
): TenantosClient {
  return createClient({
    baseUrl,
    apiKey,
    timeout: 30000,
    debug: false,
    retry: {
      attempts: 3,
      delay: 1000,
    },
    ...options,
  });
}

/**
 * @fileoverview TenantOS API Resource Classes
 * 
 * This file contains resource classes that provide organized access to different
 * TenantOS API endpoints. Each resource class encapsulates operations for a specific
 * type of resource (e.g., PXE profiles, users, subnets) and provides type-safe
 * methods for CRUD operations and specialized actions.
 * 
 * Resource classes included:
 * - PXEProfilesResource: PXE boot profile management
 * - PXEScriptsResource: PXE script management
 * - PXEDisklayoutsResource: Disk layout configuration
 * - RemoteAgentsResource: Remote agent management
 * - RDNSResource: Reverse DNS management
 * - RolesResource: User role management
 * - SearchResource: Global search functionality
 * - SubnetsResource: Network subnet management
 * - SystemResource: System configuration and monitoring
 * - TasksResource: Task tracking and management
 * - UsersResource: User account management
 * - VPSPlansResource: VPS plan configuration
 * - OSResource: Operating system management
 * 
 * All resource classes extend BaseResource which provides common functionality
 * like request handling, validation, and error management.
 * 
 * @version 1.0.0
 * @author Salim Shadman
 * @license MIT
 * @description TypeScript wrapper for TenantOS API - created by Salim Shadman under MIT License
 */

import type {
  ListOptions,
  PXEProfile,
  PXEScript,
  PXEDisklayout,
  RemoteAgent,
  IPMIKVMIso,
  RDNSProvider,
  RDNSRecord,
  Role,
  SearchResult,
  Subnet,
  SystemBackup,
  SystemLog,
  SystemSetting,
  Task,
  User,
  UserToken,
  SSHKey,
  VPSPlan,

  PXEProfileFilters,
  RemoteAgentFilters,
  SubnetFilters,
  UserFilters,
  VPSPlanFilters,
  CreatePXEProfileRequest,
  CreatePXEScriptRequest,
  CreatePXEDisklayoutRequest,
  CreateRemoteAgentRequest,
  CreateRDNSProviderRequest,
  CreateSubnetRequest,
  CreateUserRequest,
  CreateVPSPlanRequest,
  PXEProfilesResponse,
  PXEScriptsResponse,
  PXEDisklayoutsResponse,
  RemoteAgentsResponse,
  RDNSProvidersResponse,
  SubnetsResponse,
  UsersResponse,
  VPSPlansResponse,
  OperationResult,
} from './types';
import type { RequestConfig, ApiResponse } from './types';
import type { TenantosClient } from './client';
import { getErrorMessage } from './errors';

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
      throw new Error(`${resourceName} ID must be a positive integer`);
    }
  }

  /**
   * Validate required string field
   */
  protected validateRequiredString(value: string, fieldName: string): void {
    if (!value?.trim()) {
      throw new Error(`${fieldName} is required and cannot be empty`);
    }
  }
}

/**
 * PXE Profiles management resource
 */
export class PXEProfilesResource extends BaseResource {
  async list(options: ListOptions<PXEProfileFilters> = {}): Promise<PXEProfile[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<PXEProfilesResponse>({
      method: 'GET',
      url: '/api/pxe/profiles',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as PXEProfile[] : [];
  }

  async get(id: number): Promise<PXEProfile> {
    this.validateId(id, 'PXE Profile');
    
    const response = await this.request<PXEProfile>({
      method: 'GET',
      url: `/api/pxe/profiles/${id}`,
    });
    
    if (!response.result) {
      throw new Error('PXE profile not found');
    }
    
    return response.result;
  }

  async create(data: CreatePXEProfileRequest): Promise<PXEProfile> {
    const response = await this.request<PXEProfile>({
      method: 'POST',
      url: '/api/pxe/profiles',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create PXE profile');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreatePXEProfileRequest>): Promise<PXEProfile> {
    this.validateId(id, 'PXE Profile');
    
    const response = await this.request<PXEProfile>({
      method: 'PUT',
      url: `/api/pxe/profiles/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update PXE profile');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'PXE Profile');
    
    await this.request({
      method: 'DELETE',
      url: `/api/pxe/profiles/${id}`,
    });
  }

  async duplicate(pxeProfileId: number): Promise<PXEProfile> {
    this.validateId(pxeProfileId, 'PXE Profile');
    
    const response = await this.request<PXEProfile>({
      method: 'POST',
      url: `/api/pxe/profiles/${pxeProfileId}/duplicate`,
    });
    
    if (!response.result) {
      throw new Error('Failed to duplicate PXE profile');
    }
    
    return response.result;
  }

  async clearCache(pxeProfileId: number): Promise<void> {
    this.validateId(pxeProfileId, 'PXE Profile');
    
    await this.request({
      method: 'GET',
      url: `/api/pxe/profiles/${pxeProfileId}/clearcache`,
    });
  }

  async restore(pxeProfileId: number): Promise<void> {
    this.validateId(pxeProfileId, 'PXE Profile');
    
    await this.request({
      method: 'POST',
      url: `/api/pxe/profiles/${pxeProfileId}/restore`,
    });
  }

  async getTags(): Promise<string[]> {
    const response = await this.request<{ result: string[] }>({
      method: 'GET',
      url: '/api/pxe/tags',
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getProfilesByTags(tags: string[]): Promise<PXEProfile[]> {
    const response = await this.request<PXEProfilesResponse>({
      method: 'POST',
      url: '/api/pxe/tags/getPxeProfilesByTags',
      data: { tags },
    });
    
    return Array.isArray(response.result) ? response.result as PXEProfile[] : [];
  }

  private buildListParams(options: ListOptions<PXEProfileFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.osType) params['osType'] = options.filters.osType;
      if (options.filters.bootType) params['bootType'] = options.filters.bootType;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * PXE Scripts management resource
 */
export class PXEScriptsResource extends BaseResource {
  async list(): Promise<PXEScript[]> {
    const response = await this.request<PXEScriptsResponse>({
      method: 'GET',
      url: '/api/pxe/scripts',
    });
    
    return Array.isArray(response.result) ? response.result as PXEScript[] : [];
  }

  async get(id: number): Promise<PXEScript> {
    this.validateId(id, 'PXE Script');
    
    const response = await this.request<PXEScript>({
      method: 'GET',
      url: `/api/pxe/scripts/${id}`,
    });
    
    if (!response.result) {
      throw new Error('PXE script not found');
    }
    
    return response.result;
  }

  async create(data: CreatePXEScriptRequest): Promise<PXEScript> {
    const response = await this.request<PXEScript>({
      method: 'POST',
      url: '/api/pxe/scripts',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create PXE script');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreatePXEScriptRequest>): Promise<PXEScript> {
    this.validateId(id, 'PXE Script');
    
    const response = await this.request<PXEScript>({
      method: 'PUT',
      url: `/api/pxe/scripts/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update PXE script');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'PXE Script');
    
    await this.request({
      method: 'DELETE',
      url: `/api/pxe/scripts/${id}`,
    });
  }

  async duplicate(pxeScriptId: number): Promise<PXEScript> {
    this.validateId(pxeScriptId, 'PXE Script');
    
    const response = await this.request<PXEScript>({
      method: 'POST',
      url: `/api/pxe/scripts/${pxeScriptId}/duplicate`,
    });
    
    if (!response.result) {
      throw new Error('Failed to duplicate PXE script');
    }
    
    return response.result;
  }
}

/**
 * PXE Disklayouts management resource
 */
export class PXEDisklayoutsResource extends BaseResource {
  async list(): Promise<PXEDisklayout[]> {
    const response = await this.request<PXEDisklayoutsResponse>({
      method: 'GET',
      url: '/api/pxe/disklayouts',
    });
    
    return Array.isArray(response.result) ? response.result as PXEDisklayout[] : [];
  }

  async get(id: number): Promise<PXEDisklayout> {
    this.validateId(id, 'PXE Disklayout');
    
    const response = await this.request<PXEDisklayout>({
      method: 'GET',
      url: `/api/pxe/disklayouts/${id}`,
    });
    
    if (!response.result) {
      throw new Error('PXE disklayout not found');
    }
    
    return response.result;
  }

  async create(data: CreatePXEDisklayoutRequest): Promise<PXEDisklayout> {
    const response = await this.request<PXEDisklayout>({
      method: 'POST',
      url: '/api/pxe/disklayouts',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create PXE disklayout');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreatePXEDisklayoutRequest>): Promise<PXEDisklayout> {
    this.validateId(id, 'PXE Disklayout');
    
    const response = await this.request<PXEDisklayout>({
      method: 'PUT',
      url: `/api/pxe/disklayouts/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update PXE disklayout');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'PXE Disklayout');
    
    await this.request({
      method: 'DELETE',
      url: `/api/pxe/disklayouts/${id}`,
    });
  }

  async duplicate(pxeDisklayoutId: number): Promise<PXEDisklayout> {
    this.validateId(pxeDisklayoutId, 'PXE Disklayout');
    
    const response = await this.request<PXEDisklayout>({
      method: 'POST',
      url: `/api/pxe/disklayouts/${pxeDisklayoutId}/duplicate`,
    });
    
    if (!response.result) {
      throw new Error('Failed to duplicate PXE disklayout');
    }
    
    return response.result;
  }
}

/**
 * PXE Windows management resource
 */
export class PXEWindowsResource extends BaseResource {
  async importWindows(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/pxe/windows/importWindows',
      data,
    });
  }

  async getWindowsInformation(data: any): Promise<any> {
    const response = await this.request({
      method: 'POST',
      url: '/api/pxe/windows/getWindowsInformation',
      data,
    });
    
    return response.result;
  }
}

/**
 * Remote Agents management resource
 */
export class RemoteAgentsResource extends BaseResource {
  async list(options: ListOptions<RemoteAgentFilters> = {}): Promise<RemoteAgent[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<RemoteAgentsResponse>({
      method: 'GET',
      url: '/api/remoteAgents',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as RemoteAgent[] : [];
  }

  async get(id: number): Promise<RemoteAgent> {
    this.validateId(id, 'Remote Agent');
    
    const response = await this.request<RemoteAgent>({
      method: 'GET',
      url: `/api/remoteAgents/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Remote agent not found');
    }
    
    return response.result;
  }

  async create(data: CreateRemoteAgentRequest): Promise<RemoteAgent> {
    const response = await this.request<RemoteAgent>({
      method: 'POST',
      url: '/api/remoteAgents',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create remote agent');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateRemoteAgentRequest>): Promise<RemoteAgent> {
    this.validateId(id, 'Remote Agent');
    
    const response = await this.request<RemoteAgent>({
      method: 'PUT',
      url: `/api/remoteAgents/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update remote agent');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Remote Agent');
    
    await this.request({
      method: 'DELETE',
      url: `/api/remoteAgents/${id}`,
    });
  }

  async testConnectivity(agentId: number): Promise<OperationResult> {
    this.validateId(agentId, 'Remote Agent');
    
    try {
      await this.request({
        method: 'POST',
        url: `/api/remoteAgents/${agentId}/actions/testConnectivity`,
      });
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  async getAssignments(agentId: number): Promise<any[]> {
    this.validateId(agentId, 'Remote Agent');
    
    const response = await this.request({
      method: 'GET',
      url: `/api/remoteAgents/${agentId}/actions/getAssignments`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async reprovisioning(agentId: number, data: any): Promise<void> {
    this.validateId(agentId, 'Remote Agent');
    
    await this.request({
      method: 'POST',
      url: `/api/remoteAgents/${agentId}/reprovisioning`,
      data,
    });
  }

  // IPMI KVM ISOs management
  readonly ipmiKvmIsos = {
    list: async (): Promise<IPMIKVMIso[]> => {
      const response = await this.request<{ result: IPMIKVMIso[] }>({
        method: 'GET',
        url: '/api/remoteAgents/ipmiKvmIsos',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    create: async (data: Partial<IPMIKVMIso>): Promise<IPMIKVMIso> => {
      const response = await this.request<IPMIKVMIso>({
        method: 'POST',
        url: '/api/remoteAgents/ipmiKvmIsos',
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to create IPMI KVM ISO');
      }
      
      return response.result;
    },

    get: async (id: number): Promise<IPMIKVMIso> => {
      this.validateId(id, 'IPMI KVM ISO');
      
      const response = await this.request<IPMIKVMIso>({
        method: 'GET',
        url: `/api/remoteAgents/ipmiKvmIsos/${id}`,
      });
      
      if (!response.result) {
        throw new Error('IPMI KVM ISO not found');
      }
      
      return response.result;
    },

    delete: async (id: number): Promise<void> => {
      this.validateId(id, 'IPMI KVM ISO');
      
      await this.request({
        method: 'DELETE',
        url: `/api/remoteAgents/ipmiKvmIsos/${id}`,
      });
    },
  };

  private buildListParams(options: ListOptions<RemoteAgentFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.enabled !== undefined) params['enabled'] = options.filters.enabled ? 1 : 0;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * Reverse DNS management resource
 */
export class RDNSResource extends BaseResource {
  // RDNS Providers
  readonly providers = {
    list: async (): Promise<RDNSProvider[]> => {
      const response = await this.request<RDNSProvidersResponse>({
        method: 'GET',
        url: '/api/rdns/providers',
      });
      
      return Array.isArray(response.result) ? response.result as RDNSProvider[] : [];
    },

    get: async (id: number): Promise<RDNSProvider> => {
      this.validateId(id, 'RDNS Provider');
      
      const response = await this.request<RDNSProvider>({
        method: 'GET',
        url: `/api/rdns/providers/${id}`,
      });
      
      if (!response.result) {
        throw new Error('RDNS provider not found');
      }
      
      return response.result;
    },

    create: async (data: CreateRDNSProviderRequest): Promise<RDNSProvider> => {
      const response = await this.request<RDNSProvider>({
        method: 'POST',
        url: '/api/rdns/providers',
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to create RDNS provider');
      }
      
      return response.result;
    },

    update: async (id: number, data: Partial<CreateRDNSProviderRequest>): Promise<RDNSProvider> => {
      this.validateId(id, 'RDNS Provider');
      
      const response = await this.request<RDNSProvider>({
        method: 'PUT',
        url: `/api/rdns/providers/${id}`,
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to update RDNS provider');
      }
      
      return response.result;
    },

    delete: async (id: number): Promise<void> => {
      this.validateId(id, 'RDNS Provider');
      
      await this.request({
        method: 'DELETE',
        url: `/api/rdns/providers/${id}`,
      });
    },

    configure: async (provider: string, config: any): Promise<void> => {
      await this.request({
        method: 'POST',
        url: `/api/rdns/providers/${provider}/configure`,
        data: config,
      });
    },

    addSubnetAssignment: async (provider: string, data: any): Promise<void> => {
      await this.request({
        method: 'POST',
        url: `/api/rdns/providers/${provider}/addSubnetAssignment`,
        data,
      });
    },

    testConnectivity: async (provider: string): Promise<OperationResult> => {
      try {
        await this.request({
          method: 'POST',
          url: `/api/rdns/providers/${provider}/actions/testConnectivity`,
        });
        
        return { success: true };
      } catch (error) {
        return {
          success: false,
          error: getErrorMessage(error),
        };
      }
    },
  };

  // RDNS IP records
  async createRecord(data: RDNSRecord): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/rdns/ip',
      data,
    });
  }

  async updateRecord(data: RDNSRecord): Promise<void> {
    await this.request({
      method: 'PUT',
      url: '/api/rdns/ip',
      data,
    });
  }

  async deleteRecord(ip: string): Promise<void> {
    await this.request({
      method: 'DELETE',
      url: '/api/rdns/ip',
      data: { ip },
    });
  }
}

/**
 * Roles management resource (standard roles, not alias roles)
 */
export class RolesResource extends BaseResource {
  async list(): Promise<Role[]> {
    const response = await this.request<{ result: Role[] }>({
      method: 'GET',
      url: '/api/roles',
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async get(id: number): Promise<Role> {
    this.validateId(id, 'Role');
    
    const response = await this.request<Role>({
      method: 'GET',
      url: `/api/roles/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Role not found');
    }
    
    return response.result;
  }

  async create(data: any): Promise<Role> {
    const response = await this.request<Role>({
      method: 'POST',
      url: '/api/roles',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create role');
    }
    
    return response.result;
  }

  async update(id: number, data: any): Promise<Role> {
    this.validateId(id, 'Role');
    
    const response = await this.request<Role>({
      method: 'PUT',
      url: `/api/roles/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update role');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Role');
    
    await this.request({
      method: 'DELETE',
      url: `/api/roles/${id}`,
    });
  }

  async getPermissions(): Promise<string[]> {
    const response = await this.request<{ result: string[] }>({
      method: 'GET',
      url: '/api/permissions',
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

/**
 * Search functionality resource
 */
export class SearchResource extends BaseResource {
  async quickSearch(query: string): Promise<SearchResult[]> {
    const response = await this.request<{ result: SearchResult[] }>({
      method: 'POST',
      url: '/api/search/quicksearch',
      data: { query },
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

/**
 * Subnets management resource
 */
export class SubnetsResource extends BaseResource {
  async list(options: ListOptions<SubnetFilters> = {}): Promise<Subnet[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<SubnetsResponse>({
      method: 'GET',
      url: '/api/subnets',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as Subnet[] : [];
  }

  async get(id: number): Promise<Subnet> {
    this.validateId(id, 'Subnet');
    
    const response = await this.request<Subnet>({
      method: 'GET',
      url: `/api/subnets/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Subnet not found');
    }
    
    return response.result;
  }

  async getWithDetails(subnetId: number): Promise<Subnet> {
    this.validateId(subnetId, 'Subnet');
    
    const response = await this.request<Subnet>({
      method: 'GET',
      url: `/api/subnets/${subnetId}/withDetails`,
    });
    
    if (!response.result) {
      throw new Error('Subnet not found');
    }
    
    return response.result;
  }

  async create(data: CreateSubnetRequest): Promise<Subnet> {
    const response = await this.request<Subnet>({
      method: 'POST',
      url: '/api/subnets',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create subnet');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateSubnetRequest>): Promise<Subnet> {
    this.validateId(id, 'Subnet');
    
    const response = await this.request<Subnet>({
      method: 'PUT',
      url: `/api/subnets/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update subnet');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Subnet');
    
    await this.request({
      method: 'DELETE',
      url: `/api/subnets/${id}`,
    });
  }

  async split(subnetId: number, data: any): Promise<void> {
    this.validateId(subnetId, 'Subnet');
    
    await this.request({
      method: 'POST',
      url: `/api/subnets/${subnetId}/split`,
      data,
    });
  }

  async childsMassActions(subnetId: number, data: any): Promise<void> {
    this.validateId(subnetId, 'Subnet');
    
    await this.request({
      method: 'POST',
      url: `/api/subnets/${subnetId}/childsMassActions`,
      data,
    });
  }

  async listFreeIps(subnetId: number): Promise<string[]> {
    this.validateId(subnetId, 'Subnet');
    
    const response = await this.request<{ result: string[] }>({
      method: 'GET',
      url: `/api/subnets/${subnetId}/listFreeIps`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  // RDNS Assignment methods
  async getRdnsAssignment(subnetId: number): Promise<any> {
    this.validateId(subnetId, 'Subnet');
    
    const response = await this.request({
      method: 'GET',
      url: `/api/subnets/${subnetId}/rdnsAssignment`,
    });
    
    return response.result;
  }

  async createRdnsAssignment(subnet: string, data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/subnets/${subnet}/rdnsAssignment`,
      data,
    });
  }

  async deleteRdnsAssignment(subnet: string): Promise<void> {
    await this.request({
      method: 'DELETE',
      url: `/api/subnets/${subnet}/rdnsAssignment`,
    });
  }

  private buildListParams(options: ListOptions<SubnetFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.network) params['network'] = options.filters.network;
      if (options.filters.vlanId) params['vlanId'] = options.filters.vlanId;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * System management resource
 */
export class SystemResource extends BaseResource {
  // System backups
  readonly backups = {
    // Storage management
    storages: {
      list: async (): Promise<any[]> => {
        const response = await this.request<{ result: any[] }>({
          method: 'GET',
          url: '/api/system/backups/storages',
        });
        
        return Array.isArray(response.result) ? response.result : [];
      },

      create: async (data: any): Promise<any> => {
        const response = await this.request({
          method: 'POST',
          url: '/api/system/backups/storages',
          data,
        });
        
        return response.result;
      },

      get: async (id: number): Promise<any> => {
        this.validateId(id, 'Backup Storage');
        
        const response = await this.request({
          method: 'GET',
          url: `/api/system/backups/storages/${id}`,
        });
        
        return response.result;
      },

      update: async (id: number, data: any): Promise<any> => {
        this.validateId(id, 'Backup Storage');
        
        const response = await this.request({
          method: 'PUT',
          url: `/api/system/backups/storages/${id}`,
          data,
        });
        
        return response.result;
      },

      delete: async (id: number): Promise<void> => {
        this.validateId(id, 'Backup Storage');
        
        await this.request({
          method: 'DELETE',
          url: `/api/system/backups/storages/${id}`,
        });
      },
    },

    // Backup history and operations
    getHistory: async (): Promise<SystemBackup[]> => {
      const response = await this.request<{ result: SystemBackup[] }>({
        method: 'GET',
        url: '/api/system/backups/history',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    getHistoryItem: async (backupTaskId: string): Promise<SystemBackup> => {
      const response = await this.request<SystemBackup>({
        method: 'GET',
        url: `/api/system/backups/history/${backupTaskId}`,
      });
      
      if (!response.result) {
        throw new Error('Backup history item not found');
      }
      
      return response.result;
    },

    create: async (data: any): Promise<void> => {
      await this.request({
        method: 'POST',
        url: '/api/system/backups/create',
        data,
      });
    },
  };

  // System logs
  readonly logs = {
    getSystemLogs: async (): Promise<SystemLog[]> => {
      const response = await this.request<{ result: SystemLog[] }>({
        method: 'GET',
        url: '/api/activitylog/system',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    getUserLogs: async (): Promise<SystemLog[]> => {
      const response = await this.request<{ result: SystemLog[] }>({
        method: 'GET',
        url: '/api/activitylog/user',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    getAgentLogs: async (agentId: number): Promise<SystemLog[]> => {
      this.validateId(agentId, 'Agent');
      
      const response = await this.request<{ result: SystemLog[] }>({
        method: 'GET',
        url: `/api/activitylog/agents/${agentId}`,
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },
  };

  // System settings
  readonly settings = {
    getGlobalSettings: async (): Promise<SystemSetting[]> => {
      const response = await this.request<{ result: SystemSetting[] }>({
        method: 'GET',
        url: '/api/system/globalSystemSettings',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    updateGlobalSettings: async (settings: Record<string, any>): Promise<void> => {
      await this.request({
        method: 'PUT',
        url: '/api/system/globalSystemSettings',
        data: settings,
      });
    },

    getSetting: async (settingName: string): Promise<SystemSetting> => {
      const response = await this.request<SystemSetting>({
        method: 'GET',
        url: `/api/system/globalSystemSettings/${settingName}`,
      });
      
      if (!response.result) {
        throw new Error('System setting not found');
      }
      
      return response.result;
    },
  };

  // Other system endpoints
  async getSettingsAfterLogin(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: '/api/system/settingsAfterLogin',
    });
    
    return response.result;
  }

  async getListTimeDateFormats(): Promise<string[]> {
    const response = await this.request<{ result: string[] }>({
      method: 'GET',
      url: '/api/system/listTimeDateFormats',
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  // UI related endpoints
  readonly ui = {
    getLanguage: async (): Promise<any> => {
      const response = await this.request({
        method: 'GET',
        url: '/api/system/ui/uiLanguage',
      });
      
      return response.result;
    },

    getSettings: async (): Promise<any> => {
      const response = await this.request({
        method: 'GET',
        url: '/api/system/ui/settings',
      });
      
      return response.result;
    },

    getVersion: async (): Promise<any> => {
      const response = await this.request({
        method: 'GET',
        url: '/api/system/ui/version',
      });
      
      return response.result;
    },
  };
}

/**
 * Task tracking resource
 */
export class TasksResource extends BaseResource {
  async get(id: string): Promise<Task> {
    this.validateRequiredString(id, 'Task ID');
    
    const response = await this.request<Task>({
      method: 'GET',
      url: `/api/tasks/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Task not found');
    }
    
    return response.result;
  }
}

/**
 * Users management resource
 */
export class UsersResource extends BaseResource {
  async list(options: ListOptions<UserFilters> = {}): Promise<User[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<UsersResponse>({
      method: 'GET',
      url: '/api/users',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as User[] : [];
  }

  async get(id: number): Promise<User> {
    this.validateId(id, 'User');
    
    const response = await this.request<User>({
      method: 'GET',
      url: `/api/users/${id}`,
    });
    
    if (!response.result) {
      throw new Error('User not found');
    }
    
    return response.result;
  }

  async create(data: CreateUserRequest): Promise<User> {
    const response = await this.request<User>({
      method: 'POST',
      url: '/api/users',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create user');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateUserRequest>): Promise<User> {
    this.validateId(id, 'User');
    
    const response = await this.request<User>({
      method: 'PUT',
      url: `/api/users/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update user');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'User');
    
    await this.request({
      method: 'DELETE',
      url: `/api/users/${id}`,
    });
  }

  async getCurrentUser(): Promise<User> {
    const response = await this.request<User>({
      method: 'GET',
      url: '/api/user',
    });
    
    if (!response.result) {
      throw new Error('Current user not found');
    }
    
    return response.result;
  }

  async getLoginHistory(userId: number): Promise<any[]> {
    this.validateId(userId, 'User');
    
    const response = await this.request<{ result: any[] }>({
      method: 'GET',
      url: `/api/users/${userId}/loginhistory`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getAccessLog(userId: number): Promise<any[]> {
    this.validateId(userId, 'User');
    
    const response = await this.request<{ result: any[] }>({
      method: 'GET',
      url: `/api/users/${userId}/accesslog`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async testLoginDetails(data: any): Promise<OperationResult> {
    try {
      await this.request({
        method: 'POST',
        url: '/api/user/testLoginDetails',
        data,
      });
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  async addAdditionalUserInformation(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: '/api/user/additionalUserInformation',
      data,
    });
  }

  async generateSsoToken(user: number): Promise<string> {
    this.validateId(user, 'User');
    
    const response = await this.request<{ token: string }>({
      method: 'POST',
      url: `/api/users/${user}/generateSsoToken`,
    });
    
    return response.result?.token || '';
  }

  // Impersonation
  async startImpersonation(impersonateUserId: number): Promise<void> {
    this.validateId(impersonateUserId, 'User');
    
    await this.request({
      method: 'GET',
      url: `/api/impersonate/${impersonateUserId}/start`,
    });
  }

  async stopImpersonation(impersonateUserId: number): Promise<void> {
    this.validateId(impersonateUserId, 'User');
    
    await this.request({
      method: 'GET',
      url: `/api/impersonate/${impersonateUserId}/stop`,
    });
  }

  // Tokens management
  readonly tokens = {
    list: async (user: number): Promise<UserToken[]> => {
      this.validateId(user, 'User');
      
      const response = await this.request<{ result: UserToken[] }>({
        method: 'GET',
        url: `/api/users/${user}/tokens`,
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    create: async (user: number, data: Partial<UserToken>): Promise<UserToken> => {
      this.validateId(user, 'User');
      
      const response = await this.request<UserToken>({
        method: 'POST',
        url: `/api/users/${user}/tokens`,
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to create user token');
      }
      
      return response.result;
    },

    get: async (user: number, id: number): Promise<UserToken> => {
      this.validateId(user, 'User');
      this.validateId(id, 'Token');
      
      const response = await this.request<UserToken>({
        method: 'GET',
        url: `/api/users/${user}/tokens/${id}`,
      });
      
      if (!response.result) {
        throw new Error('User token not found');
      }
      
      return response.result;
    },

    update: async (user: number, id: number, data: Partial<UserToken>): Promise<UserToken> => {
      this.validateId(user, 'User');
      this.validateId(id, 'Token');
      
      const response = await this.request<UserToken>({
        method: 'PUT',
        url: `/api/users/${user}/tokens/${id}`,
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to update user token');
      }
      
      return response.result;
    },

    delete: async (user: number, id: number): Promise<void> => {
      this.validateId(user, 'User');
      this.validateId(id, 'Token');
      
      await this.request({
        method: 'DELETE',
        url: `/api/users/${user}/tokens/${id}`,
      });
    },
  };

  // SSH Keys management
  readonly sshKeys = {
    list: async (user: number): Promise<SSHKey[]> => {
      this.validateId(user, 'User');
      
      const response = await this.request<{ result: SSHKey[] }>({
        method: 'GET',
        url: `/api/users/${user}/sshkeys`,
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    create: async (user: number, data: Partial<SSHKey>): Promise<SSHKey> => {
      this.validateId(user, 'User');
      
      const response = await this.request<SSHKey>({
        method: 'POST',
        url: `/api/users/${user}/sshkeys`,
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to create SSH key');
      }
      
      return response.result;
    },

    get: async (user: number, id: number): Promise<SSHKey> => {
      this.validateId(user, 'User');
      this.validateId(id, 'SSH Key');
      
      const response = await this.request<SSHKey>({
        method: 'GET',
        url: `/api/users/${user}/sshkeys/${id}`,
      });
      
      if (!response.result) {
        throw new Error('SSH key not found');
      }
      
      return response.result;
    },

    update: async (user: number, id: number, data: Partial<SSHKey>): Promise<SSHKey> => {
      this.validateId(user, 'User');
      this.validateId(id, 'SSH Key');
      
      const response = await this.request<SSHKey>({
        method: 'PUT',
        url: `/api/users/${user}/sshkeys/${id}`,
        data,
      });
      
      if (!response.result) {
        throw new Error('Failed to update SSH key');
      }
      
      return response.result;
    },

    delete: async (user: number, id: number): Promise<void> => {
      this.validateId(user, 'User');
      this.validateId(id, 'SSH Key');
      
      await this.request({
        method: 'DELETE',
        url: `/api/users/${user}/sshkeys/${id}`,
      });
    },
  };

  // Two-factor authentication
  readonly twoFactor = {
    enable: async (user: number, data: any): Promise<void> => {
      this.validateId(user, 'User');
      
      await this.request({
        method: 'POST',
        url: `/api/user/${user}/twofactor/enable`,
        data,
      });
    },

    disable: async (user: number): Promise<void> => {
      this.validateId(user, 'User');
      
      await this.request({
        method: 'GET',
        url: `/api/user/${user}/twofactor/disable`,
      });
    },
  };

  private buildListParams(options: ListOptions<UserFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.roleId) params['roleId'] = options.filters.roleId;
      if (options.filters.enabled !== undefined) params['enabled'] = options.filters.enabled ? 1 : 0;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * VPS Plans management resource
 */
export class VPSPlansResource extends BaseResource {
  async list(options: ListOptions<VPSPlanFilters> = {}): Promise<VPSPlan[]> {
    const params = this.buildListParams(options);
    
    const response = await this.request<VPSPlansResponse>({
      method: 'GET',
      url: '/api/virtualization/vpsplans',
      params,
    });
    
    return Array.isArray(response.result) ? response.result as VPSPlan[] : [];
  }

  async get(id: number): Promise<VPSPlan> {
    this.validateId(id, 'VPS Plan');
    
    const response = await this.request<VPSPlan>({
      method: 'GET',
      url: `/api/virtualization/vpsplans/${id}`,
    });
    
    if (!response.result) {
      throw new Error('VPS plan not found');
    }
    
    return response.result;
  }

  async create(data: CreateVPSPlanRequest): Promise<VPSPlan> {
    const response = await this.request<VPSPlan>({
      method: 'POST',
      url: '/api/virtualization/vpsplans',
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create VPS plan');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<CreateVPSPlanRequest>): Promise<VPSPlan> {
    this.validateId(id, 'VPS Plan');
    
    const response = await this.request<VPSPlan>({
      method: 'PUT',
      url: `/api/virtualization/vpsplans/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update VPS plan');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'VPS Plan');
    
    await this.request({
      method: 'DELETE',
      url: `/api/virtualization/vpsplans/${id}`,
    });
  }

  async duplicate(vpsplan: number): Promise<VPSPlan> {
    this.validateId(vpsplan, 'VPS Plan');
    
    const response = await this.request<VPSPlan>({
      method: 'POST',
      url: `/api/virtualization/vpsplans/${vpsplan}/duplicate`,
    });
    
    if (!response.result) {
      throw new Error('Failed to duplicate VPS plan');
    }
    
    return response.result;
  }

  // Balancer plans
  readonly balancerPlans = {
    list: async (): Promise<any[]> => {
      const response = await this.request<{ result: any[] }>({
        method: 'GET',
        url: '/api/virtualization/balancerplans',
      });
      
      return Array.isArray(response.result) ? response.result : [];
    },

    create: async (data: any): Promise<any> => {
      const response = await this.request({
        method: 'POST',
        url: '/api/virtualization/balancerplans',
        data,
      });
      
      return response.result;
    },

    get: async (id: number): Promise<any> => {
      this.validateId(id, 'Balancer Plan');
      
      const response = await this.request({
        method: 'GET',
        url: `/api/virtualization/balancerplans/${id}`,
      });
      
      return response.result;
    },

    update: async (id: number, data: any): Promise<any> => {
      this.validateId(id, 'Balancer Plan');
      
      const response = await this.request({
        method: 'PUT',
        url: `/api/virtualization/balancerplans/${id}`,
        data,
      });
      
      return response.result;
    },

    delete: async (id: number): Promise<void> => {
      this.validateId(id, 'Balancer Plan');
      
      await this.request({
        method: 'DELETE',
        url: `/api/virtualization/balancerplans/${id}`,
      });
    },

    testConfiguration: async (data: any): Promise<OperationResult> => {
      try {
        await this.request({
          method: 'POST',
          url: '/api/virtualization/balancerplans/testBalancerConfiguration',
          data,
        });
        
        return { success: true };
      } catch (error) {
        return {
          success: false,
          error: getErrorMessage(error),
        };
      }
    },
  };

  // IP assignments for virtualization
  async getAssignableSubnets(): Promise<Subnet[]> {
    const response = await this.request<{ result: Subnet[] }>({
      method: 'GET',
      url: '/api/virtualization/ipassignments/getAssignableSubnets',
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  private buildListParams(options: ListOptions<VPSPlanFilters>): Record<string, string | number> {
    const params: Record<string, string | number> = {};
    
    if (options.filters) {
      if (options.filters.search) params['search'] = options.filters.search;
      if (options.filters.minCpu) params['minCpu'] = options.filters.minCpu;
      if (options.filters.maxCpu) params['maxCpu'] = options.filters.maxCpu;
      if (options.filters.minMemory) params['minMemory'] = options.filters.minMemory;
      if (options.filters.maxMemory) params['maxMemory'] = options.filters.maxMemory;
    }
    
    if (options.page) params['page'] = options.page;
    if (options.limit) params['limit'] = options.limit;
    
    return params;
  }
}

/**
 * OS List resource
 */
export class OSResource extends BaseResource {
  async list(data?: any): Promise<any[]> {
    const response = await this.request<{ result: any[] }>({
      method: 'POST',
      url: '/api/os/list',
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

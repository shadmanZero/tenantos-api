/**
 * @fileoverview Type definitions for TenantOS API Client
 * 
 * This file contains all TypeScript type definitions, interfaces, and utility types
 * used throughout the TenantOS API client library. It provides comprehensive type
 * safety for all API operations, request/response structures, and configuration options.
 * 
 * The types are organized into several categories:
 * - Client configuration and request types
 * - Resource-specific interfaces (Server, NetworkDevice, etc.)
 * - Filter and pagination types
 * - Response and operation result types
 * - Utility and helper types
 * 
 * @version 1.0.0
 * @author Salim Shadman
 * @license MIT
 * @description TypeScript wrapper for TenantOS API - created by Salim Shadman under MIT License
 */

// Import the generated schema types from OpenAPI specification
import type { paths } from './schema';

// Extract operation types from the schema for type-safe API operations
export type ApiPaths = paths;

// Utility types for extracting request/response types
export type GetEndpoint<T extends keyof ApiPaths> = ApiPaths[T] extends { get: infer U } ? U : never;
export type PostEndpoint<T extends keyof ApiPaths> = ApiPaths[T] extends { post: infer U } ? U : never;
export type PutEndpoint<T extends keyof ApiPaths> = ApiPaths[T] extends { put: infer U } ? U : never;
export type DeleteEndpoint<T extends keyof ApiPaths> = ApiPaths[T] extends { delete: infer U } ? U : never;

// Extract response types
export type ResponseOf<T> = T extends { responses: { 200: { content: { 'application/json': infer R } } } } ? R : never;
export type RequestBodyOf<T> = T extends { requestBody: { content: { 'application/json': infer R } } } ? R : never;

/**
 * Configuration interface for TenantOS API client
 * 
 * This interface defines all the configuration options available when creating
 * a new TenantOS client instance. All properties are readonly to ensure
 * immutability after client creation.
 * 
 * @example
 * ```typescript
 * const config: TenantosClientConfig = {
 *   baseUrl: 'https://your-tenant.tenantos.com',
 *   apiKey: 'your-api-key-here',
 *   timeout: 30000,
 *   debug: true,
 *   retry: {
 *     attempts: 3,
 *     delay: 1000
 *   }
 * };
 * ```
 */
export interface TenantosClientConfig {
  /** 
   * Base URL of your TenantOS instance
   * @example 'https://your-tenant.tenantos.com'
   */
  readonly baseUrl: string;
  
  /** 
   * API authentication token - obtain this from your TenantOS dashboard
   * @example 'Bearer abc123...'
   */
  readonly apiKey: string;
  
  /** 
   * Request timeout in milliseconds
   * @default 30000
   * @minimum 1000
   * @maximum 300000
   */
  readonly timeout?: number;
  
  /** 
   * Custom headers to include with every request
   * Useful for adding custom authentication or tracking headers
   */
  readonly headers?: Readonly<Record<string, string>>;
  
  /** 
   * Enable debug logging for requests and responses
   * @default false
   */
  readonly debug?: boolean;
  
  /** 
   * Retry configuration for failed requests
   * Only retryable errors (network issues, 5xx responses) will be retried
   */
  readonly retry?: {
    /** Number of retry attempts (0-10) */
    readonly attempts: number;
    /** Delay between retries in milliseconds (0-30000) */
    readonly delay: number;
  };
}

/** 
 * Supported HTTP methods for API requests
 * These are the standard REST methods supported by the TenantOS API
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * Configuration for individual API requests
 * 
 * This interface defines the structure for making HTTP requests to the TenantOS API.
 * It's used internally by the client but can be useful for advanced use cases.
 */
export interface RequestConfig {
  /** HTTP method for the request */
  readonly method: HttpMethod;
  /** API endpoint URL (relative to base URL) */
  readonly url: string;
  /** Optional headers specific to this request */
  readonly headers?: Readonly<Record<string, string>>;
  /** Request body data (for POST/PUT requests) */
  readonly data?: unknown;
  /** Query parameters to append to the URL */
  readonly params?: Readonly<Record<string, string | number | boolean>>;
}

/**
 * Standard API response wrapper
 * 
 * All TenantOS API responses follow this structure, providing consistent
 * error handling and result extraction across all endpoints.
 * 
 * @template T - The type of the result data
 */
export interface ApiResponse<T = unknown> {
  /** The actual response data (if successful) */
  readonly result?: T;
  /** Optional message from the server */
  readonly message?: string;
}

// Pagination options
export interface PaginationOptions {
  readonly page?: number;
  readonly limit?: number;
  readonly offset?: number;
}

// Base filter interface
export interface BaseFilters {
  readonly search?: string;
}

// Server-specific filters
export interface ServerFilters extends BaseFilters {
  readonly tags?: readonly string[];
  readonly servertype?: string;
  readonly os?: string;
  readonly userId?: number;
}

// Network device filters
export interface NetworkDeviceFilters extends BaseFilters {
  readonly deviceType?: string;
  readonly agentId?: number;
}

// Role filters
export interface RoleFilters extends BaseFilters {
  readonly type?: string;
  readonly ownerUserId?: number;
}

// Additional filter interfaces
export interface AliasUserFilters extends BaseFilters {
  readonly roleId?: number;
}

export interface BrandFilters extends BaseFilters {
  readonly name?: string;
}

export interface ExternalProviderFilters extends BaseFilters {
  readonly type?: string;
  readonly enabled?: boolean;
}

export interface InventoryComponentFilters extends BaseFilters {
  readonly groupname?: string;
  readonly valueType?: string;
}

export interface PXEProfileFilters extends BaseFilters {
  readonly osType?: string;
  readonly bootType?: string;
}

export interface RemoteAgentFilters extends BaseFilters {
  readonly enabled?: boolean;
}

export interface SubnetFilters extends BaseFilters {
  readonly network?: string;
  readonly vlanId?: number;
}

export interface UserFilters extends BaseFilters {
  readonly roleId?: number;
  readonly enabled?: boolean;
}

export interface VPSPlanFilters extends BaseFilters {
  readonly minCpu?: number;
  readonly maxCpu?: number;
  readonly minMemory?: number;
  readonly maxMemory?: number;
}

// Generic list options
export interface ListOptions<TFilters = Record<string, never>> extends PaginationOptions {
  readonly filters?: TFilters;
  readonly sort?: string;
  readonly order?: 'asc' | 'desc';
}

// Power management types
export type PowerAction = 'on' | 'off' | 'reset' | 'cycle';
export type BootType = 'pxe' | 'disk' | 'rescue';

export interface PowerOperation {
  readonly action: PowerAction;
  readonly bootType?: BootType;
}

// Hardware component interface
export interface HardwareComponent {
  readonly model: string;
  readonly value: string | number;
  readonly count: number;
  readonly valueType: string;
  readonly details?: Array<{
    readonly model: string;
    readonly size: string;
  }>;
}

// Detailed hardware information
export interface DetailedHardwareInformation {
  readonly cpu?: HardwareComponent;
  readonly memory?: HardwareComponent;
  readonly mainboard?: HardwareComponent;
  readonly [key: string]: HardwareComponent | undefined;
}

// Custom field interface
export interface CustomField {
  readonly field_id: number;
  readonly name: string;
  readonly type: string;
  readonly values: readonly unknown[];
}

// User interface
export interface User {
  readonly userId: number;
  readonly fullname: string;
  readonly username: string;
}

// Role interface
export interface Role {
  readonly id: number;
  readonly name: string;
  readonly assignedUsers: readonly User[];
  readonly ownedBy: User;
  readonly ownerUserId: number;
  readonly type: string;
  readonly permissions: readonly string[];
  readonly isAliasRole?: number;
  readonly notDeleteable?: number;
  readonly notAssignable?: number;
}

// Alias User interface
export interface AliasUser {
  readonly id: number;
  readonly fullname: string;
  readonly username: string;
  readonly email?: string;
  readonly roles?: readonly Role[];
}

// Brand interface
export interface Brand {
  readonly id: number;
  readonly name: string;
  readonly logoUrl?: string;
  readonly description?: string;
}

// External Provider interface
export interface ExternalProvider {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly config: Record<string, unknown>;
  readonly enabled: boolean;
}

// File interface
export interface FileInfo {
  readonly id: number;
  readonly filename: string;
  readonly size: number;
  readonly mimeType: string;
  readonly uploadedAt: string;
}

// IP Management interfaces
export interface IPReservation {
  readonly ip: string;
  readonly subnet: string;
  readonly reserved: boolean;
  readonly comment?: string;
}

export interface IPComment {
  readonly ip: string;
  readonly comment: string;
  readonly userId: number;
  readonly createdAt: string;
}

// PXE interfaces
export interface PXEProfile {
  readonly id: number;
  readonly name: string;
  readonly description?: string;
  readonly osType: string;
  readonly bootType: string;
  readonly config: Record<string, unknown>;
}

export interface PXEScript {
  readonly id: number;
  readonly name: string;
  readonly content: string;
  readonly type: string;
}

export interface PXEDisklayout {
  readonly id: number;
  readonly name: string;
  readonly layout: string;
  readonly description?: string;
}

// Remote Agent interfaces
export interface RemoteAgent {
  readonly id: number;
  readonly name: string;
  readonly host: string;
  readonly port: number;
  readonly enabled: boolean;
  readonly lastSeen?: string;
}

export interface IPMIKVMIso {
  readonly id: number;
  readonly name: string;
  readonly filename: string;
  readonly size: number;
}

// Reverse DNS interfaces
export interface RDNSProvider {
  readonly id: number;
  readonly name: string;
  readonly type: string;
  readonly config: Record<string, unknown>;
}

export interface RDNSRecord {
  readonly ip: string;
  readonly hostname: string;
  readonly ttl?: number;
}

// Subnet interface
export interface Subnet {
  readonly id: number;
  readonly network: string;
  readonly netmask: string;
  readonly gateway?: string;
  readonly description?: string;
  readonly vlanId?: number;
}

// System interfaces
export interface SystemBackup {
  readonly id: number;
  readonly filename: string;
  readonly size: number;
  readonly createdAt: string;
  readonly type: string;
}

export interface SystemLog {
  readonly id: number;
  readonly level: string;
  readonly message: string;
  readonly timestamp: string;
  readonly source: string;
}

export interface SystemSetting {
  readonly key: string;
  readonly value: unknown;
  readonly type: string;
  readonly description?: string;
}

// Task interface
export interface Task {
  readonly id: string;
  readonly type: string;
  readonly status: 'pending' | 'running' | 'completed' | 'failed';
  readonly progress?: number;
  readonly result?: unknown;
  readonly error?: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

// User Token interface
export interface UserToken {
  readonly id: number;
  readonly name: string;
  readonly token: string;
  readonly permissions: readonly string[];
  readonly expiresAt?: string;
  readonly lastUsed?: string;
}

// SSH Key interface
export interface SSHKey {
  readonly id: number;
  readonly name: string;
  readonly publicKey: string;
  readonly fingerprint: string;
  readonly createdAt: string;
}

// VPS Plan interface
export interface VPSPlan {
  readonly id: number;
  readonly name: string;
  readonly cpu: number;
  readonly memory: number;
  readonly disk: number;
  readonly bandwidth?: number;
  readonly price?: number;
}

// Server extended interfaces
export interface ServerConnection {
  readonly id: number;
  readonly type: string;
  readonly host: string;
  readonly port: number;
  readonly username?: string;
  readonly enabled: boolean;
}

export interface ServerComment {
  readonly id: number;
  readonly content: string;
  readonly userId: number;
  readonly createdAt: string;
  readonly files?: readonly FileInfo[];
}

export interface ServerIPAssignment {
  readonly id: number;
  readonly ip: string;
  readonly subnet: string;
  readonly type: 'primary' | 'secondary';
  readonly rdnsHostname?: string;
}

export interface ServerInventoryItem {
  readonly id: number;
  readonly componentId: number;
  readonly quantity: number;
  readonly serialNumber?: string;
  readonly notes?: string;
}

export interface ServerBackup {
  readonly id: string;
  readonly name: string;
  readonly size: number;
  readonly createdAt: string;
  readonly type: string;
}

export interface ServerSnapshot {
  readonly id: string;
  readonly name: string;
  readonly size: number;
  readonly createdAt: string;
  readonly description?: string;
}

/**
 * Server resource interface
 * 
 * Represents a physical or virtual server managed by TenantOS.
 * This is one of the core resources in the system and contains
 * comprehensive information about server configuration, hardware,
 * and operational status.
 * 
 * @example
 * ```typescript
 * const server: Server = {
 *   id: 123,
 *   hostname: 'web-server-01',
 *   servername: 'Web Server 01',
 *   user_id: 1,
 *   os: 'Ubuntu 22.04',
 *   servertype: 'dedicated',
 *   primaryip: '192.168.1.100',
 *   owner_realname: 'John Doe',
 *   tags: ['web', 'production'],
 *   description: 'Main web server for production environment'
 * };
 * ```
 */
export interface Server {
  /** Unique identifier for the server */
  readonly id: number;
  
  /** Server hostname (FQDN) */
  readonly hostname: string;
  
  /** Human-readable server name */
  readonly servername: string;
  
  /** ID of the user who owns this server */
  readonly user_id: number;
  
  /** Operating system installed on the server */
  readonly os: string;
  
  /** Type of server (e.g., 'dedicated', 'virtual', 'cloud') */
  readonly servertype: string;
  
  /** Primary IP address of the server */
  readonly primaryip: string;
  
  /** Real name of the server owner */
  readonly owner_realname: string;
  
  /** Array of tags for categorization and filtering */
  readonly tags: readonly string[];
  
  /** Server description or notes */
  readonly description: string;
  
  /** Detailed hardware information (if available) */
  readonly detailedHardwareInformation?: DetailedHardwareInformation;
  
  /** Power management provider configuration */
  readonly powerprovider?: {
    /** Type of power provider (e.g., 'ipmi', 'redfish') */
    readonly type: string;
    /** List of supported power management features */
    readonly supportedFeatures: readonly string[];
  };
  
  /** Console access provider configuration */
  readonly consoleprovider?: {
    /** Type of console provider */
    readonly type: string;
  };
  
  /** Flag indicating if OS reinstallation is currently running (1 = yes, 0 = no) */
  readonly reinstallationRunning?: number;
  
  /** Flag indicating if disk wipe operation is currently running */
  readonly diskwipeRunning?: number;
  
  /** Flag indicating if rescue boot is currently active */
  readonly rescueBootRunning?: number;
  
  /** Flag indicating if hardware collection is currently running */
  readonly hardwarecollectRunning?: number;
  
  /** Flag indicating if password reset operation is currently running */
  readonly passwordResetRunning?: number;
}

// Network device interface
export interface NetworkDevice {
  readonly id: number;
  readonly name: string;
  readonly host: string;
  readonly deviceType: string;
  readonly snmpCommunity?: string;
  readonly snmpVersion?: string;
  readonly agentId?: number;
  readonly features?: readonly string[];
  readonly username?: string;
  readonly password?: string;
  readonly port?: string;
  readonly managementVendor?: string;
  readonly managementPort?: string;
  readonly managementUser?: string;
  readonly managementPassword?: string;
  readonly extendedDetailsAvailable?: boolean;
  readonly rootType?: string;
}

// Inventory component interface
export interface InventoryComponent {
  readonly id: number;
  readonly componentname: string;
  readonly description: string;
  readonly groupname: string;
  readonly valueType: string;
  readonly customfields: readonly CustomField[];
  readonly notdeletable?: number;
  readonly created_at?: string;
  readonly updated_at?: string;
  readonly customfieldsRelations?: readonly number[];
}

// System information types
export interface SystemVersion {
  readonly version?: string;
}

export interface SystemTimezones {
  readonly timezones?: readonly string[];
}

// Request body types - extracted from schema
export type CreateServerRequest = RequestBodyOf<PostEndpoint<'/api/servers'>>;
export type CreateNetworkDeviceRequest = RequestBodyOf<PostEndpoint<'/api/networkDevices'>>;
export type CreateRoleRequest = RequestBodyOf<PostEndpoint<'/api/aliasRoles'>>;
export type CreateAliasUserRequest = RequestBodyOf<PostEndpoint<'/api/aliasUsers'>>;
export type CreateBrandRequest = RequestBodyOf<PostEndpoint<'/api/system/brands'>>;
export type CreateExternalProviderRequest = RequestBodyOf<PostEndpoint<'/api/externalProviders'>>;
export type CreateInventoryComponentRequest = RequestBodyOf<PostEndpoint<'/api/inventorycomponents'>>;
export type CreatePXEProfileRequest = RequestBodyOf<PostEndpoint<'/api/pxe/profiles'>>;
export type CreatePXEScriptRequest = RequestBodyOf<PostEndpoint<'/api/pxe/scripts'>>;
export type CreatePXEDisklayoutRequest = RequestBodyOf<PostEndpoint<'/api/pxe/disklayouts'>>;
export type CreateRemoteAgentRequest = RequestBodyOf<PostEndpoint<'/api/remoteAgents'>>;
export type CreateRDNSProviderRequest = RequestBodyOf<PostEndpoint<'/api/rdns/providers'>>;
export type CreateSubnetRequest = RequestBodyOf<PostEndpoint<'/api/subnets'>>;
export type CreateUserRequest = RequestBodyOf<PostEndpoint<'/api/users'>>;
export type CreateVPSPlanRequest = RequestBodyOf<PostEndpoint<'/api/virtualization/vpsplans'>>;

// Response types - extracted from schema
export type ServersResponse = ResponseOf<GetEndpoint<'/api/servers'>>;
export type NetworkDevicesResponse = ResponseOf<GetEndpoint<'/api/networkDevices'>>;
export type InventoryComponentsResponse = ResponseOf<GetEndpoint<'/api/inventorycomponents'>>;
export type RolesResponse = ResponseOf<GetEndpoint<'/api/aliasRoles'>>;
export type AliasUsersResponse = ResponseOf<GetEndpoint<'/api/aliasUsers'>>;
export type BrandsResponse = ResponseOf<GetEndpoint<'/api/system/brands'>>;
export type ExternalProvidersResponse = ResponseOf<GetEndpoint<'/api/externalProviders'>>;
export type PXEProfilesResponse = ResponseOf<GetEndpoint<'/api/pxe/profiles'>>;
export type PXEScriptsResponse = ResponseOf<GetEndpoint<'/api/pxe/scripts'>>;
export type PXEDisklayoutsResponse = ResponseOf<GetEndpoint<'/api/pxe/disklayouts'>>;
export type RemoteAgentsResponse = ResponseOf<GetEndpoint<'/api/remoteAgents'>>;
export type RDNSProvidersResponse = ResponseOf<GetEndpoint<'/api/rdns/providers'>>;
export type SubnetsResponse = ResponseOf<GetEndpoint<'/api/subnets'>>;
export type UsersResponse = ResponseOf<GetEndpoint<'/api/users'>>;
export type VPSPlansResponse = ResponseOf<GetEndpoint<'/api/virtualization/vpsplans'>>;

// Utility types for type safety
export type NonEmptyString<T extends string> = T extends '' ? never : T;
export type PositiveNumber<T extends number> = T extends 0 ? never : T;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Resource operation result
export interface OperationResult<T = unknown> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
}

// Batch operation types
export interface BatchOperation<T> {
  readonly items: readonly T[];
  readonly concurrency?: number;
}

export interface BatchResult<T> {
  readonly successful: T[];
  readonly failed: Array<{
    readonly item: T;
    readonly error: string;
  }>;
}

// Search result interface
export interface SearchResult {
  readonly type: string;
  readonly id: number;
  readonly title: string;
  readonly description?: string;
  readonly url?: string;
}

// Statistics interfaces
export interface NetworkStats {
  readonly timestamp: string;
  readonly bytesIn: number;
  readonly bytesOut: number;
  readonly packetsIn: number;
  readonly packetsOut: number;
}

export interface CPUStats {
  readonly timestamp: string;
  readonly usage: number;
  readonly cores: number;
}

export interface MemoryStats {
  readonly timestamp: string;
  readonly used: number;
  readonly total: number;
  readonly usage: number;
}

export interface DiskIOStats {
  readonly timestamp: string;
  readonly readBytes: number;
  readonly writeBytes: number;
  readonly readOps: number;
  readonly writeOps: number;
}

// BMC User interface
export interface BMCUser {
  readonly id: number;
  readonly username: string;
  readonly privilege: string;
  readonly enabled: boolean;
}

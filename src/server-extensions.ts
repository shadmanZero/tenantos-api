/**
 * @fileoverview Server Extension Resources for TenantOS API
 * 
 * This file contains specialized resource classes that provide server-specific
 * functionality beyond basic CRUD operations. These resources are designed to
 * work with individual servers and provide access to advanced server management
 * features such as BMC user management, backup operations, network configuration,
 * and hardware monitoring.
 * 
 * Server extension resources included:
 * - ServerBMCUsersResource: BMC (Baseboard Management Controller) user management
 * - ServerBackupsResource: Server backup creation and management
 * - ServerSnapshotsResource: VM snapshot operations
 * - ServerCommentsResource: Server comment and annotation management
 * - ServerConnectionsResource: Server connection configuration and testing
 * - ServerIPAssignmentsResource: IP address assignment and management
 * - ServerInventoryResource: Hardware inventory and component tracking
 * - ServerNetworkResource: Network configuration and VLAN management
 * - ServerProvisioningResource: OS provisioning and installation
 * - ServerPowerResource: Advanced power management operations
 * - ServerVMResource: Virtual machine resource management
 * - ServerStatisticsResource: Performance monitoring and statistics
 * - ServerConsoleResource: Console access management
 * - ServerActivityLogResource: Server activity and audit logging
 * 
 * All server extension resources are instantiated through the main servers resource
 * and are scoped to a specific server ID for security and organization.
 * 
 * @example
 * ```typescript
 * // Access server extensions through the servers resource
 * const client = new TenantosClient(config);
 * const serverId = 123;
 * 
 * // BMC user management
 * const bmcUsers = client.servers.bmcUsers(serverId);
 * const users = await bmcUsers.listUsers();
 * 
 * // Server backups
 * const backups = client.servers.backups(serverId);
 * await backups.create({ name: 'daily-backup' });
 * 
 * // Server statistics
 * const stats = client.servers.statistics(serverId);
 * const networkStats = await stats.getNetworkStats('daily');
 * ```
 * 
 * @version 1.0.0
 * @author Salim Shadman
 * @license MIT
 * @description TypeScript wrapper for TenantOS API - created by Salim Shadman under MIT License
 */

import type {
  ServerConnection,
  ServerComment,
  ServerIPAssignment,
  ServerInventoryItem,
  ServerBackup,
  ServerSnapshot,
  NetworkStats,
  CPUStats,
  MemoryStats,
  DiskIOStats,
  BMCUser,

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
 * Server BMC (Baseboard Management Controller) User Management Resource
 * 
 * This resource provides comprehensive management of BMC users for a specific server.
 * BMC users are used for out-of-band management operations like power control,
 * console access, and hardware monitoring. This class allows you to create, update,
 * delete, and configure BMC users with appropriate privileges and access controls.
 * 
 * BMC user management is critical for server administration as it provides:
 * - Remote power management capabilities
 * - Console access for troubleshooting
 * - Hardware monitoring and alerting
 * - Secure out-of-band management
 * 
 * @example
 * ```typescript
 * const bmcUsers = client.servers.bmcUsers(123);
 * 
 * // List all BMC users
 * const users = await bmcUsers.listUsers();
 * 
 * // Create a new BMC user with specific privileges
 * const newUser = await bmcUsers.createUserWithPasswordAndPrivilege({
 *   username: 'admin-user',
 *   password: 'secure-password',
 *   privilege: 'administrator'
 * });
 * 
 * // Update user privileges
 * await bmcUsers.setUserPrivilege(newUser.id, 'operator');
 * 
 * // Enable/disable user
 * await bmcUsers.enableUser(newUser.id);
 * await bmcUsers.disableUser(newUser.id);
 * ```
 */
export class ServerBMCUsersResource extends BaseResource {
  /**
   * Creates a new ServerBMCUsersResource instance
   * 
   * @param client - The TenantOS client instance
   * @param serverId - The ID of the server to manage BMC users for
   */
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  /**
   * List all BMC users for the server
   * 
   * Retrieves a list of all BMC users configured on the server's baseboard
   * management controller. This includes both active and inactive users.
   * 
   * @returns Promise that resolves to an array of BMC users
   * @throws {TenantosApiError} If the request fails
   * 
   * @example
   * ```typescript
   * const users = await bmcUsers.listUsers();
   * console.log(`Found ${users.length} BMC users`);
   * users.forEach(user => {
   *   console.log(`${user.username}: ${user.privilege} (${user.enabled ? 'enabled' : 'disabled'})`);
   * });
   * ```
   */
  async listUsers(): Promise<BMCUser[]> {
    const response = await this.request<{ result: BMCUser[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/bmc/users/listUsers`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  /**
   * Create a new BMC user
   * 
   * Creates a new BMC user with the provided configuration. Note that this
   * method creates a basic user - use createUserWithPasswordAndPrivilege()
   * for a more complete user setup.
   * 
   * @param data - Partial BMC user data
   * @returns Promise that resolves to the created BMC user
   * @throws {TenantosApiError} If the creation fails
   * 
   * @example
   * ```typescript
   * const user = await bmcUsers.createUser({
   *   username: 'monitoring-user',
   *   enabled: true
   * });
   * ```
   */
  async createUser(data: Partial<BMCUser>): Promise<BMCUser> {
    const response = await this.request<BMCUser>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/users/createUser`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create BMC user');
    }
    
    return response.result;
  }

  /**
   * Create a BMC user with password and privilege in one operation
   * 
   * This is the recommended method for creating BMC users as it sets up
   * the username, password, and privilege level in a single atomic operation.
   * This ensures the user is immediately usable for BMC operations.
   * 
   * @param data - User creation data including username, password, and privilege
   * @returns Promise that resolves to the created BMC user
   * @throws {TenantosApiError} If the creation fails
   * 
   * @example
   * ```typescript
   * const adminUser = await bmcUsers.createUserWithPasswordAndPrivilege({
   *   username: 'admin',
   *   password: 'secure-password-123',
   *   privilege: 'administrator'
   * });
   * 
   * const operatorUser = await bmcUsers.createUserWithPasswordAndPrivilege({
   *   username: 'operator',
   *   password: 'operator-password',
   *   privilege: 'operator'
   * });
   * ```
   */
  async createUserWithPasswordAndPrivilege(data: {
    username: string;
    password: string;
    privilege: string;
  }): Promise<BMCUser> {
    const response = await this.request<BMCUser>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/users/createUserWithPasswordAndPrivilege`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create BMC user with password and privilege');
    }
    
    return response.result;
  }

  async updateUser(userId: number, data: Partial<BMCUser>): Promise<BMCUser> {
    this.validateId(userId, 'BMC User');
    
    const response = await this.request<BMCUser>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/users/updateUser`,
      data: { userId, ...data },
    });
    
    if (!response.result) {
      throw new Error('Failed to update BMC user');
    }
    
    return response.result;
  }

  async deleteUser(userId: number): Promise<void> {
    this.validateId(userId, 'BMC User');
    
    await this.request({
      method: 'DELETE',
      url: `/api/servers/${this.serverId}/bmc/users/deleteUser`,
      data: { userId },
    });
  }

  async enableUser(userId: number): Promise<void> {
    this.validateId(userId, 'BMC User');
    
    await this.request({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/bmc/users/enableUser`,
      data: { userId },
    });
  }

  async disableUser(userId: number): Promise<void> {
    this.validateId(userId, 'BMC User');
    
    await this.request({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/bmc/users/disableUser`,
      data: { userId },
    });
  }

  async setUserPassword(userId: number, password: string): Promise<void> {
    this.validateId(userId, 'BMC User');
    
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/users/setUserPassword`,
      data: { userId, password },
    });
  }

  async setUserPrivilege(userId: number, privilege: string): Promise<void> {
    this.validateId(userId, 'BMC User');
    
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/users/setUserPrivilege`,
      data: { userId, privilege },
    });
  }

  async channelSetAccess(userId: number, data: any): Promise<void> {
    this.validateId(userId, 'BMC User');
    
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/users/channelSetAccess`,
      data: { userId, ...data },
    });
  }
}

/**
 * Server Backups resource
 */
export class ServerBackupsResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async list(): Promise<ServerBackup[]> {
    const response = await this.request<{ result: ServerBackup[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/backups`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async create(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/backups`,
      data,
    });
  }

  async delete(backupId?: string): Promise<void> {
    const url = backupId 
      ? `/api/servers/${this.serverId}/backups/${backupId}`
      : `/api/servers/${this.serverId}/backups`;
    
    await this.request({
      method: 'DELETE',
      url,
    });
  }

  async restore(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/backups/restore`,
      data,
    });
  }

  async getAvailable(): Promise<ServerBackup[]> {
    const response = await this.request<{ result: ServerBackup[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/backups/available`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

/**
 * Server Snapshots resource
 */
export class ServerSnapshotsResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async list(): Promise<ServerSnapshot[]> {
    const response = await this.request<{ result: ServerSnapshot[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/snapshots`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async create(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/snapshots`,
      data,
    });
  }

  async delete(snapshotId?: string): Promise<void> {
    const url = snapshotId 
      ? `/api/servers/${this.serverId}/snapshots/${snapshotId}`
      : `/api/servers/${this.serverId}/snapshots`;
    
    await this.request({
      method: 'DELETE',
      url,
    });
  }

  async rollback(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/snapshots/rollback`,
      data,
    });
  }

  async getAvailable(): Promise<ServerSnapshot[]> {
    const response = await this.request<{ result: ServerSnapshot[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/snapshots/available`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

/**
 * Server Comments resource
 */
export class ServerCommentsResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async list(): Promise<ServerComment[]> {
    const response = await this.request<{ result: ServerComment[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/comments`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async create(data: Partial<ServerComment>): Promise<ServerComment> {
    const response = await this.request<ServerComment>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/comments`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create server comment');
    }
    
    return response.result;
  }

  async get(id: number): Promise<ServerComment> {
    this.validateId(id, 'Server Comment');
    
    const response = await this.request<ServerComment>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/comments/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Server comment not found');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<ServerComment>): Promise<ServerComment> {
    this.validateId(id, 'Server Comment');
    
    const response = await this.request<ServerComment>({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/comments/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update server comment');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Server Comment');
    
    await this.request({
      method: 'DELETE',
      url: `/api/servers/${this.serverId}/comments/${id}`,
    });
  }
}

/**
 * Server Connections resource
 */
export class ServerConnectionsResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async list(): Promise<ServerConnection[]> {
    const response = await this.request<{ result: ServerConnection[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/connections`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async create(data: Partial<ServerConnection>): Promise<ServerConnection> {
    const response = await this.request<ServerConnection>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/connections`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create server connection');
    }
    
    return response.result;
  }

  async get(id: number): Promise<ServerConnection> {
    this.validateId(id, 'Server Connection');
    
    const response = await this.request<ServerConnection>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/connections/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Server connection not found');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<ServerConnection>): Promise<ServerConnection> {
    this.validateId(id, 'Server Connection');
    
    const response = await this.request<ServerConnection>({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/connections/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update server connection');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Server Connection');
    
    await this.request({
      method: 'DELETE',
      url: `/api/servers/${this.serverId}/connections/${id}`,
    });
  }

  async test(testConnectionId: number): Promise<OperationResult> {
    this.validateId(testConnectionId, 'Test Connection');
    
    try {
      await this.request({
        method: 'GET',
        url: `/api/servers/${this.serverId}/connections/${testConnectionId}/test`,
      });
      
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  async executeAction(testConnectionId: number, serverConnectionAction: string, data?: any): Promise<void> {
    this.validateId(testConnectionId, 'Test Connection');
    
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/connections/${testConnectionId}/${serverConnectionAction}`,
      data,
    });
  }
}

/**
 * Server IP Assignments resource
 */
export class ServerIPAssignmentsResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async list(): Promise<ServerIPAssignment[]> {
    const response = await this.request<{ result: ServerIPAssignment[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/ipassignments`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async create(data: Partial<ServerIPAssignment>): Promise<ServerIPAssignment> {
    const response = await this.request<ServerIPAssignment>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/ipassignments`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create server IP assignment');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<ServerIPAssignment>): Promise<ServerIPAssignment> {
    this.validateId(id, 'Server IP Assignment');
    
    const response = await this.request<ServerIPAssignment>({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/ipassignments/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update server IP assignment');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Server IP Assignment');
    
    await this.request({
      method: 'DELETE',
      url: `/api/servers/${this.serverId}/ipassignments/${id}`,
    });
  }

  async getAssignableSubnets(): Promise<any[]> {
    const response = await this.request<{ result: any[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/ipassignments/getAssignableSubnets`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getAssignableIpsOfSubnet(data: { subnetId: number }): Promise<string[]> {
    const response = await this.request<{ result: string[] }>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/ipassignments/getAssignableIpsOfSubnet`,
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async createRdns(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/ipassignments/rdns`,
      data,
    });
  }

  async createDynamicIpAssignments(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/ipassignments/dynamicIpAssignments`,
      data,
    });
  }
}

/**
 * Server Inventory resource
 */
export class ServerInventoryResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async list(): Promise<ServerInventoryItem[]> {
    const response = await this.request<{ result: ServerInventoryItem[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/inventory`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async create(data: Partial<ServerInventoryItem>): Promise<ServerInventoryItem> {
    const response = await this.request<ServerInventoryItem>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/inventory`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to create server inventory item');
    }
    
    return response.result;
  }

  async get(id: number): Promise<ServerInventoryItem> {
    this.validateId(id, 'Server Inventory Item');
    
    const response = await this.request<ServerInventoryItem>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/inventory/${id}`,
    });
    
    if (!response.result) {
      throw new Error('Server inventory item not found');
    }
    
    return response.result;
  }

  async update(id: number, data: Partial<ServerInventoryItem>): Promise<ServerInventoryItem> {
    this.validateId(id, 'Server Inventory Item');
    
    const response = await this.request<ServerInventoryItem>({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/inventory/${id}`,
      data,
    });
    
    if (!response.result) {
      throw new Error('Failed to update server inventory item');
    }
    
    return response.result;
  }

  async delete(id: number): Promise<void> {
    this.validateId(id, 'Server Inventory Item');
    
    await this.request({
      method: 'DELETE',
      url: `/api/servers/${this.serverId}/inventory/${id}`,
    });
  }

  async getHardwareSummary(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/hwsummary`,
    });
    
    return response.result;
  }

  async getHardwareSummaryWithDetails(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/hwsummary/withDetails`,
    });
    
    return response.result;
  }

  async getInventoryCommand(): Promise<string> {
    const response = await this.request<{ command: string }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/inventory/getInventoryCommand`,
    });
    
    return response.result?.command || '';
  }
}

/**
 * Server Network Management resource
 */
export class ServerNetworkResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async regenerateVlanConfiguration(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/network/regenerateVlanConfiguration`,
      data,
    });
  }

  async getManageableNetworkPorts(): Promise<any[]> {
    const response = await this.request<{ result: any[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/network/getManageableNetworkPorts`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

/**
 * Server OS Provisioning resource
 */
export class ServerProvisioningResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async startReinstallation(data: any): Promise<void> {
    await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/provisioning/startReinstallation`,
      data,
    });
  }

  async stopReinstallation(): Promise<void> {
    await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/provisioning/stopReinstallation`,
    });
  }

  async getInstallStatus(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/provisioning/getInstallStatus`,
    });
    
    return response.result;
  }

  async executePostCommand(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/provisioning/executePostCommand`,
    });
    
    return response.result;
  }

  async getProfiles(): Promise<any[]> {
    const response = await this.request<{ result: any[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/provisioning/getProfiles`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getOsLogo(data: any): Promise<any> {
    const response = await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/provisioning/getOsLogo`,
      data,
    });
    
    return response.result;
  }
}

/**
 * Server Power Management resource (extended)
 */
export class ServerPowerResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async executeMethod(serverPowerMethod: string): Promise<void> {
    await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/power/${serverPowerMethod}`,
    });
  }

  async executeCommand(data: any): Promise<any> {
    const response = await this.request({
      method: 'POST',
      url: `/api/servers/${this.serverId}/bmc/executeCommand`,
      data,
    });
    
    return response.result;
  }
}

/**
 * Server VM Resources resource
 */
export class ServerVMResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async get(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/vm`,
    });
    
    return response.result;
  }

  async update(data: any): Promise<any> {
    const response = await this.request({
      method: 'PUT',
      url: `/api/servers/${this.serverId}/vm`,
      data,
    });
    
    return response.result;
  }
}

/**
 * Server Statistics resource
 */
export class ServerStatisticsResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async getNetworkStats(statsMode: string, data?: any): Promise<NetworkStats[]> {
    const response = await this.request<{ result: NetworkStats[] }>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/stats/network/${statsMode}`,
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getIPMIStats(statsMode: string, data?: any): Promise<any[]> {
    const response = await this.request<{ result: any[] }>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/stats/ipmi/${statsMode}`,
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getCPUStats(statsMode: string, data?: any): Promise<CPUStats[]> {
    const response = await this.request<{ result: CPUStats[] }>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/stats/cpu/${statsMode}`,
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getMemoryStats(statsMode: string, data?: any): Promise<MemoryStats[]> {
    const response = await this.request<{ result: MemoryStats[] }>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/stats/memory/${statsMode}`,
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getDiskIOStats(statsMode: string, data?: any): Promise<DiskIOStats[]> {
    const response = await this.request<{ result: DiskIOStats[] }>({
      method: 'POST',
      url: `/api/servers/${this.serverId}/stats/diskio/${statsMode}`,
      data,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }

  async getAvailableStatistics(): Promise<string[]> {
    const response = await this.request<{ result: string[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/stats/getAvailableStatistics`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

/**
 * Server Console resource
 */
export class ServerConsoleResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async start(): Promise<any> {
    const response = await this.request({
      method: 'GET',
      url: `/api/servers/${this.serverId}/console/start`,
    });
    
    return response.result;
  }
}

/**
 * Server Activity Log resource
 */
export class ServerActivityLogResource extends BaseResource {
  constructor(client: any, private readonly serverId: number) {
    super(client);
  }

  async get(): Promise<any[]> {
    const response = await this.request<{ result: any[] }>({
      method: 'GET',
      url: `/api/servers/${this.serverId}/activitylog`,
    });
    
    return Array.isArray(response.result) ? response.result : [];
  }
}

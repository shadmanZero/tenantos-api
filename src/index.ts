/**
 * @fileoverview TenantOS API Client Library
 * 
 * This is the main entry point for the TenantOS API client library.
 * It provides a comprehensive TypeScript SDK for interacting with TenantOS APIs,
 * including server management, network devices, user management, and more.
 * 
 * @version 1.0.0
 * @author Salim Shadman
 * @license MIT
 * @description TypeScript wrapper for TenantOS API - created by Salim Shadman under MIT License
 * 
 * @example
 * ```typescript
 * import { TenantosClient } from '@tenantos/api';
 * 
 * const client = new TenantosClient({
 *   baseUrl: 'https://your-tenant.tenantos.com',
 *   apiKey: 'your-api-key'
 * });
 * 
 * // List all servers
 * const servers = await client.servers.list();
 * ```
 */

// Main client export - Primary entry point for the SDK
export { TenantosClient } from './client';

// Type exports - All TypeScript interfaces and types
export type * from './types';

// Error exports - Custom error classes for better error handling
export * from './errors';

// Resource exports - Individual resource classes for specific API endpoints
export {
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

// Server extension resources - Specialized resources for server-specific operations
export * from './server-extensions';

// Utility exports - Helper functions and utilities

# TenantOS API Documentation

This directory contains the generated TypeScript documentation for the TenantOS API wrapper library.

## Official Documentation

For the complete TenantOS API reference, please visit the [official TenantOS API documentation](https://api.tenantos.com/docs/).

## Wrapper Documentation

This TypeScript wrapper provides:

- **Type-safe API calls** with full IntelliSense support
- **Comprehensive error handling** with custom error types
- **Automatic retry logic** for transient failures
- **Resource-based organization** for intuitive API usage
- **Complete TypeScript definitions** for all API endpoints

## Quick Start

```typescript
import { TenantosClient } from '@tenantos/api';

const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key'
});

// List servers
const servers = await client.servers.list();

// Get server details
const server = await client.servers.get(123);

// Server power management
await client.servers.power.on(123);
```

## API Coverage

This wrapper covers 100% of the TenantOS API endpoints as documented in the [official API docs](https://api.tenantos.com/docs/), including:

### Core Resources
- **Servers** - Complete server lifecycle management
- **Network Devices** - Network infrastructure management
- **Users & Roles** - User account and permission management
- **IP Management** - IP address allocation and management
- **Inventory** - Hardware inventory tracking

### Server Extensions
- **BMC Users** - Baseboard Management Controller user management
- **Backups** - Server backup operations
- **Snapshots** - VM snapshot management
- **Statistics** - Performance monitoring and metrics
- **Console** - Remote console access
- **Provisioning** - OS installation and configuration

### System Management
- **PXE Profiles** - Boot profile configuration
- **Remote Agents** - Agent management and monitoring
- **Subnets** - Network subnet configuration
- **RDNS** - Reverse DNS management
- **System Settings** - Global system configuration

## Error Handling

The wrapper provides comprehensive error handling with specific error types:

```typescript
import { isTenantosApiError, isTenantosNetworkError } from '@tenantos/api';

try {
  const server = await client.servers.get(999);
} catch (error) {
  if (isTenantosApiError(error)) {
    console.log(`API Error ${error.statusCode}: ${error.message}`);
    if (error.isNotFound()) {
      console.log('Server not found');
    }
  } else if (isTenantosNetworkError(error)) {
    console.log('Network connectivity issue');
  }
}
```

## License

This TypeScript wrapper library was created by **Salim Shadman** and is released under the **MIT License**. The underlying TenantOS API is managed by TenantOS.


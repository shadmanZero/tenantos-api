# TenantOS API

[![NPM Version](https://img.shields.io/npm/v/tenantos-api.svg)](https://www.npmjs.com/package/tenantos-api)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

TypeScript API client to manage TenantOS servers and infrastructure.

## 📚 API Documentation
[Official TenantOS API Docs](https://api.tenantos.com/docs/) | [Type Definitions](./src/types.ts) | [Generated HTML Docs](./docs/api-html/index.html) | [Generated Markdown Docs](./docs/api/README.md)

## 🎯 API Coverage
Mapping 100% of available TenantOS API calls based on the [official API documentation](https://api.tenantos.com/docs/). All API endpoints are fully typed with comprehensive TypeScript definitions. Code size < 50KB including complete documentation.

> **Note**: This wrapper covers all endpoints documented in the [official TenantOS API docs](https://api.tenantos.com/docs/). For detailed API specifications, parameter requirements, and response formats, please refer to the official documentation.


## 📖 Overview

To use this API, follow the resource-based structure:

- Use the client's resource properties (e.g., `client.servers`, `client.networkDevices`)
- Chain method calls for nested resources (e.g., `client.servers.bmcUsers(serverId)`)
- Call the appropriate HTTP method (`.list()`, `.get()`, `.create()`, `.update()`, `.delete()`)
- All methods return properly typed responses with full IntelliSense support

The provided TypeScript definitions will assist you with IntelliSense. For complete API reference, consult the [official TenantOS API documentation](https://api.tenantos.com/docs/).

## 📋 Examples

### Server Management
```typescript
// List all servers
const servers = await client.servers.list();

// Get specific server
const server = await client.servers.get(123);

// Create new server
const newServer = await client.servers.create({
  hostname: 'web-server-01.example.com',
  servername: 'Web Server 01',
  os: 'Ubuntu 22.04',
  servertype: 'dedicated'
});

// Server power operations
await client.servers.power.on(123);
await client.servers.power.off(123);
await client.servers.power.reset(123);
```

### Server Extensions
```typescript
// BMC user management
const bmcUsers = client.servers.bmcUsers(123);
await bmcUsers.createUserWithPasswordAndPrivilege({
  username: 'admin',
  password: 'secure-password',
  privilege: 'administrator'
});

// Server backups
const backups = client.servers.backups(123);
await backups.create({ name: 'daily-backup' });

// Server statistics
const stats = client.servers.statistics(123);
const networkStats = await stats.getNetworkStats('daily');
```

### Network Device Management
```typescript
// List network devices
const devices = await client.networkDevices.list();

// Test device connectivity
const result = await client.networkDevices.testConnectivity(456);
if (result.success) {
  console.log('Device is reachable');
}

// Run custom actions
await client.networkDevices.runAction(456, 'restart');
```

### User and Role Management
```typescript
// List users
const users = await client.users.list();

// Create new user
const newUser = await client.users.create({
  username: 'john.doe',
  fullname: 'John Doe',
  email: 'john.doe@example.com'
});

// Manage user tokens
const tokens = client.users.tokens(newUser.userId);
await tokens.create({ name: 'API Access Token' });
```

## 💻 Code Sample

[![NPM Version](https://img.shields.io/npm/v/tenantos-api.svg)](https://www.npmjs.com/package/tenantos-api) A complete server management example.

```bash
npm install tenantos-api
```

```typescript
import { TenantosClient, isTenantosApiError } from 'tenantos-api';

async function manageServers() {
  // Connect to TenantOS
  const client = new TenantosClient({
    baseUrl: 'https://your-tenant.tenantos.com',
    apiKey: 'your-api-key-here'
  });

  try {
    // List all servers
    const servers = await client.servers.list({
      filters: { tags: ['production'] },
      limit: 50
    });

    // Iterate through servers
    for (const server of servers) {
      console.log(`Server: ${server.servername} (${server.hostname})`);
      console.log(`OS: ${server.os}, Type: ${server.servertype}`);
      console.log(`Primary IP: ${server.primaryip}`);
      
      // Get server statistics
      const stats = client.servers.statistics(server.id);
      const networkStats = await stats.getNetworkStats('hourly');
      console.log(`Network stats: ${networkStats.length} data points`);
      
      // Check BMC users
      const bmcUsers = client.servers.bmcUsers(server.id);
      const users = await bmcUsers.listUsers();
      console.log(`BMC Users: ${users.length}`);
      
      // Get server inventory
      const inventory = client.servers.inventory(server.id);
      const hwSummary = await inventory.getHardwareSummary();
      console.log(`Hardware: ${JSON.stringify(hwSummary, null, 2)}`);
    }
  } catch (error) {
    if (isTenantosApiError(error)) {
      console.error(`API Error ${error.statusCode}: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}

manageServers().catch(console.error);
```

## 🔧 Initialization Alternatives

### Using Factory Functions
```typescript
import { createClient, createClientWithDefaults } from 'tenantos-api';

// With full configuration
const client = createClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key',
  timeout: 60000,
  debug: true
});

// With defaults
const client = createClientWithDefaults(
  'https://your-tenant.tenantos.com',
  'your-api-key'
);
```

### Advanced Configuration
```typescript
import { TenantosClient } from 'tenantos-api';

const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key',
  timeout: 30000,
  debug: true,
  retry: {
    attempts: 5,
    delay: 2000
  },
  headers: {
    'X-Custom-Header': 'custom-value'
  }
});
```

## 🔐 Authentication

The TenantOS API uses API key authentication. Obtain your API key from the TenantOS dashboard.

```typescript
const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key-from-dashboard'
});
```

## 📝 Notes

- All API calls are fully typed with TypeScript for the best development experience
- The client includes automatic retry logic for transient failures
- Comprehensive error handling with specific error types for different failure scenarios
- Built-in request/response logging when debug mode is enabled
- All methods include JSDoc documentation for IntelliSense support
- Complete API reference available at [api.tenantos.com/docs](https://api.tenantos.com/docs/)
- If any parameters are unclear, check the [official TenantOS API documentation](https://api.tenantos.com/docs/) or perform the action through the TenantOS web interface and inspect the network requests

## 🔄 Changelog

### V1.0.0
- Initial release with full TenantOS API coverage
- Complete TypeScript support with comprehensive type definitions
- Automatic retry logic with configurable backoff
- Resource-based API organization
- Comprehensive error handling
- Request/response interceptors
- Full JSDoc documentation
- Server extension resources for advanced server management
- Network device management
- User and role management
- System monitoring and configuration

## 📄 License

This TypeScript wrapper library was created by **Salim Shadman** and is released under the **ISC License**. The underlying TenantOS API is managed by TenantOS, but this wrapper is open source and free for anyone to use, modify, and distribute according to the ISC License terms.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues related to this wrapper library, please open an issue on GitHub. For TenantOS API questions, please refer to the [official TenantOS API documentation](https://api.tenantos.com/docs/).

---

## Development

### Prerequisites

- Node.js 18+ (or newer)
- npm (comes with Node)

### Install dependencies

```bash
npm i
```

### Build the project

```bash
npm run build
```

- Outputs compiled files to `dist/`.
- Generates type declarations in `dist/`.

### Lint and format

```bash
npm run lint
npm run format
```

### Local development (ts-node)

```bash
npm run start:dev
```

### Generate Documentation

Generate TypeScript documentation for the library:

```bash
npm run docs:api          # Markdown → docs/api/
npm run docs:api:html     # HTML → docs/api-html/
# Optional if you have openapi.yaml
npm run docs:openapi      # Redoc HTML → docs/openapi/index.html
```

### Project structure

- `src/` — TypeScript source code
- `dist/` — Compiled JS and type declarations
- `docs/api-html/` — Generated HTML API reference
- `docs/api/` — Generated Markdown API reference
- `docs/openapi/` — Generated Redoc (if openapi.yaml present)

### Notes

- ESLint v9 flat config is used; Prettier is integrated.
- TypeScript is configured with strict mode and additional strictness flags.
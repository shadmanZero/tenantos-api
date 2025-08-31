# TenantOS API Client

[![NPM Version](https://img.shields.io/npm/v/tenantos-api.svg)](https://www.npmjs.com/package/tenantos-api)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A modern, type-safe TypeScript/JavaScript client for the TenantOS API. Manage your bare-metal servers, network devices, and infrastructure with full IntelliSense support and comprehensive error handling.

## Why this client

- **Full TypeScript support**: Complete type definitions with IntelliSense
- **Automatic retries**: Built-in retry logic for transient failures
- **Clear error handling**: Specific error types for different scenarios
- **Comprehensive coverage**: All TenantOS endpoints mapped and typed
- **Familiar structure**: Resource-based API matching TenantOS
- **Lightweight**: Under 50KB; axios is the only runtime dependency

## Quick start

```bash
npm install tenantos-api
```

```typescript
import { TenantosClient } from 'tenantos-api';

const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key-here'
});

// Get system info
const version = await client.system.ui.getVersion();
console.log('Connected to TenantOS:', version);

// List your servers
const servers = await client.servers.list();
console.log(`You have ${servers.length} servers`);
```

## Documentation

- 📖 [Official TenantOS API Docs](https://api.tenantos.com/docs/) - Complete API reference
- 🔍 [Generated HTML Docs (GitHub Pages)](https://shadmanzero.github.io/tenantos-api/api-html/) - Browse all classes and methods
- 📝 [Generated Markdown Docs (GitHub Pages)](https://shadmanzero.github.io/tenantos-api/api/) - Same reference in Markdown

## What’s covered

This client covers **100% of the TenantOS API** based on the [official documentation](https://api.tenantos.com/docs/). Every endpoint is fully typed with comprehensive TypeScript definitions.

What you can do:

- **Server management**: list, create, power control, provisioning
- **Network devices**: switches, routers, connectivity testing
- **Users and roles**: users, permissions, API tokens
- **System monitoring**: statistics, logs, hardware inventory
- **Advanced features**: BMC users, backups, snapshots, console access

Tip: If you're unsure about any parameters, check the [official TenantOS API docs](https://api.tenantos.com/docs/) or perform the action in the TenantOS web interface and inspect the network requests.

## How it works

The client follows TenantOS's resource-based structure:

1. **Start with the client** - `const client = new TenantosClient(...)`
2. **Choose a resource** - `client.servers`, `client.networkDevices`, etc.
3. **Chain methods for nested resources** - `client.servers.bmcUsers(serverId)`
4. **Call the HTTP method** - `.list()`, `.get()`, `.create()`, `.update()`, `.delete()`

Everything is fully typed, so your IDE will guide you with IntelliSense!

## Examples

### Working with Servers

```typescript
// List servers with filtering
const servers = await client.servers.list();
const prodServers = await client.servers.list({ 
  filters: { tags: ['production'] },
  limit: 50 
});

// Get a specific server
const server = await client.servers.get(123);
console.log(`${server.servername} is running ${server.os}`);

// Power management
await client.servers.power.on(123);
await client.servers.power.off(123);
await client.servers.power.reset(123);

// Start a server reinstallation
await client.servers.provisioning(123).startReinstallation({
  os_id: 1,
  type: 'pxe'
});
```

### Advanced Server Management

```typescript
// BMC user management
const bmcUsers = client.servers.bmcUsers(123);
const users = await bmcUsers.listUsers();

await bmcUsers.createUser({
  username: 'admin',
  password: 'secure-password123',
  privilege: 'administrator'
});

// Get server performance stats
const stats = client.servers.statistics(123);
const networkStats = await stats.getNetworkStats('hourly');
console.log(`Network activity: ${networkStats.length} data points`);

// Hardware inventory
const inventory = client.servers.inventory(123);
const hardware = await inventory.getHardwareSummary();
console.log('Server specs:', hardware);
```

### Network Device Management

```typescript
// Find all switches
const devices = await client.networkDevices.list();
const switches = await client.networkDevices.list({ 
  filters: { deviceType: 'switch' } 
});

// Check if a device is reachable
const result = await client.networkDevices.testConnectivity(42);
if (result.success) {
  console.log('Device is online');
} else {
  console.log('Device unreachable:', result.error);
}

// Execute device actions
await client.networkDevices.runAction(42, 'reloadConfig');
```

### User Management

```typescript
// List all users
const users = await client.users.list();

// Add a new team member
const newUser = await client.users.create({
  username: 'john.doe',
  fullname: 'John Doe',
  email: 'john.doe@example.com'
});

// Create API tokens for the user
const tokens = client.users.tokens(newUser.userId);
const apiToken = await tokens.create({ 
  name: 'Monitoring Script Access' 
});
console.log('New API token:', apiToken.token);
```

## Configuration options

### Basic Setup

```typescript
import { TenantosClient } from 'tenantos-api';

const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key-from-dashboard'
});
```

### Advanced Configuration

```typescript
const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key',
  
  // Request timeout (default: 30 seconds)
  timeout: 60000,
  
  // Retry failed requests
  retry: {
    attempts: 5,
    delay: 2000  // 2 seconds between retries
  },
  
  // Debug logging
  debug: true,
  
  // Custom headers
  headers: {
    'X-Custom-Header': 'my-value'
  }
});
```

## Error handling

The client provides specific error types for different scenarios:

```typescript
import { TenantosClient, isTenantosApiError } from 'tenantos-api';

try {
  const server = await client.servers.get(999);
} catch (error) {
  if (isTenantosApiError(error)) {
    // API returned an error response
    console.log(`API Error ${error.statusCode}: ${error.getUserMessage()}`);
    
    if (error.isStatus(404)) {
      console.log('Server not found');
    } else if (error.isStatus(401)) {
      console.log('Check your API key');
    }
  } else {
    // Network error, timeout, etc.
    console.log('Unexpected error:', error);
  }
}
```

## Getting your API key

1. Log into your TenantOS dashboard
2. Go to **Settings** → **API Keys**
3. Click **Generate New Key**
4. Copy the key and use it in your client configuration

> ⚠️ **Security**: Never commit API keys to version control. Use environment variables or secure configuration management.

## Complete example

Here's a real-world example that demonstrates multiple features:

```typescript
import { TenantosClient, isTenantosApiError } from 'tenantos-api';

async function serverHealthCheck() {
  const client = new TenantosClient({
    baseUrl: process.env.TENANTOS_URL!,
    apiKey: process.env.TENANTOS_API_KEY!,
    retry: { attempts: 3, delay: 1000 }
  });

  try {
    console.log('Checking server health...');
    
    // Get production servers
    const servers = await client.servers.list({
      filters: { tags: ['production'] },
      limit: 100
    });

    console.log(`Found ${servers.length} production servers`);

    for (const server of servers) {
      console.log(`\nServer: ${server.servername} (${server.hostname})`);
      
      // Check recent network activity
      const stats = client.servers.statistics(server.id);
      const networkData = await stats.getNetworkStats('daily');
      
      if (networkData.length === 0) {
        console.log('No network activity detected');
      } else {
        console.log(`Network active (${networkData.length} data points)`);
      }
      
      // Verify BMC access
      const bmcUsers = client.servers.bmcUsers(server.id);
      try {
        const users = await bmcUsers.listUsers();
        console.log(`BMC users: ${users.length}`);
      } catch (error) {
        console.log('BMC access unavailable');
      }
      
      // Hardware summary
      const inventory = client.servers.inventory(server.id);
      try {
        const hardware = await inventory.getHardwareSummary();
        console.log(`Hardware: ${JSON.stringify(hardware, null, 2)}`);
      } catch (error) {
        console.log('Hardware info not available');
      }
    }
    
    console.log('\nHealth check completed');
    
  } catch (error) {
    if (isTenantosApiError(error)) {
      console.error(`API error ${error.statusCode}: ${error.getUserMessage()}`);
    } else {
      console.error('Unexpected error:', error);
    }
    process.exit(1);
  }
}

// Run the health check
serverHealthCheck();
```

## 🛠️ Development

Want to contribute or run this locally? Here's how:

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone and install
git clone https://github.com/shadmanZero/tenantos-api.git
cd tenantos-api
npm install

# Build the project
npm run build

# Generate documentation
npm run docs:api:html    # HTML docs
npm run docs:api         # Markdown docs
```

### Project Structure

- `src/` - TypeScript source code
- `dist/` - Compiled JavaScript and type declarations  
- `docs/` - Generated documentation
- `examples/` - Usage examples and playground

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **🐛 Report bugs** - Open an issue with details and reproduction steps
2. **💡 Suggest features** - Share ideas for improvements  
3. **📝 Improve docs** - Fix typos, add examples, clarify explanations
4. **🔧 Submit PRs** - Fork, create a feature branch, and submit a pull request

### Development Guidelines

- Follow TypeScript best practices
- Add JSDoc comments for new public methods
- Include examples in your documentation
- Test your changes with real TenantOS instances when possible

## 📞 Support & Questions

- 🐛 **Library Issues**: [GitHub Issues](https://github.com/shadmanZero/tenantos-api/issues)
- 📚 **TenantOS API Questions**: [Official TenantOS API Documentation](https://api.tenantos.com/docs/)
- 💬 **General Help**: Check existing issues or open a new discussion

## 📄 License

This library is created by **Salim Shadman** and released under the **ISC License**.

The TenantOS API itself is managed by TenantOS, but this TypeScript/JavaScript wrapper is open source and free for everyone to use, modify, and distribute.

## ⭐ Show Your Support

If this library helps you manage your TenantOS infrastructure, please:

- ⭐ Star this repository
- 🐦 Share it with your team
- 🤝 Contribute improvements
- 📝 Report issues you encounter

---

**Happy server managing! 🚀**

*Made with ❤️ for the TenantOS community*

---

<div align="center">
  <sub>Built with TypeScript • Powered by TenantOS • Made for Developers</sub>
</div>

[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / TenantosClient

# Class: TenantosClient

Defined in: [client.ts:1303](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1303)

Main TenantOS API client with comprehensive error handling and retry logic

The TenantosClient class is the primary entry point for interacting with the TenantOS API.
It provides a unified interface for all API operations, including server management,
network device configuration, user administration, and system monitoring.

Features:
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Error Handling**: Custom error classes with detailed error information
- **Retry Logic**: Automatic retry for transient failures with configurable backoff
- **Request Logging**: Optional debug logging for requests and responses
- **Resource Organization**: Logical grouping of API endpoints into resource classes
- **Validation**: Input validation for all parameters
- **Immutable Config**: Configuration is frozen after client creation for safety

## Examples

```typescript
const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key'
});

// List all servers
const servers = await client.servers.list();

// Get a specific server
const server = await client.servers.get(123);

// Create a new server
const newServer = await client.servers.create({
  hostname: 'new-server.example.com',
  servername: 'New Server',
  // ... other properties
});
```

```typescript
const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key',
  timeout: 60000,
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

```typescript
try {
  const server = await client.servers.get(999);
} catch (error) {
  if (isTenantosApiError(error)) {
    console.log(`API Error: ${error.statusCode} - ${error.message}`);
    if (error.isNotFound()) {
      console.log('Server not found');
    }
  }
}
```

## Constructors

### Constructor

> **new TenantosClient**(`config`): `TenantosClient`

Defined in: [client.ts:1353](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1353)

Creates a new TenantOS API client instance

The constructor validates the provided configuration, sets up the HTTP client
with appropriate defaults, configures request/response interceptors, and
initializes all resource instances for API operations.

#### Parameters

##### config

[`TenantosClientConfig`](../interfaces/TenantosClientConfig.md)

Client configuration including base URL, API key, and options

#### Returns

`TenantosClient`

#### Throws

When configuration validation fails

#### Example

```typescript
const client = new TenantosClient({
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key-here',
  timeout: 30000,
  debug: false
});
```

## Properties

### aliasRoles

> `readonly` **aliasRoles**: `AliasRolesResource`

Defined in: [client.ts:1310](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1310)

***

### aliasUsers

> `readonly` **aliasUsers**: `AliasUsersResource`

Defined in: [client.ts:1311](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1311)

***

### brands

> `readonly` **brands**: `BrandsResource`

Defined in: [client.ts:1312](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1312)

***

### externalProviders

> `readonly` **externalProviders**: `ExternalProvidersResource`

Defined in: [client.ts:1313](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1313)

***

### files

> `readonly` **files**: `FilesResource`

Defined in: [client.ts:1314](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1314)

***

### inventoryComponents

> `readonly` **inventoryComponents**: `InventoryComponentsResource`

Defined in: [client.ts:1316](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1316)

***

### ipManagement

> `readonly` **ipManagement**: `IPManagementResource`

Defined in: [client.ts:1315](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1315)

***

### networkDevices

> `readonly` **networkDevices**: `NetworkDevicesResource`

Defined in: [client.ts:1309](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1309)

***

### os

> `readonly` **os**: [`OSResource`](OSResource.md)

Defined in: [client.ts:1331](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1331)

***

### pxeDisklayouts

> `readonly` **pxeDisklayouts**: [`PXEDisklayoutsResource`](PXEDisklayoutsResource.md)

Defined in: [client.ts:1320](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1320)

***

### pxeProfiles

> `readonly` **pxeProfiles**: [`PXEProfilesResource`](PXEProfilesResource.md)

Defined in: [client.ts:1318](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1318)

***

### pxeScripts

> `readonly` **pxeScripts**: [`PXEScriptsResource`](PXEScriptsResource.md)

Defined in: [client.ts:1319](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1319)

***

### pxeWindows

> `readonly` **pxeWindows**: [`PXEWindowsResource`](PXEWindowsResource.md)

Defined in: [client.ts:1321](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1321)

***

### rdns

> `readonly` **rdns**: [`RDNSResource`](RDNSResource.md)

Defined in: [client.ts:1323](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1323)

***

### remoteAgents

> `readonly` **remoteAgents**: [`RemoteAgentsResource`](RemoteAgentsResource.md)

Defined in: [client.ts:1322](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1322)

***

### roles

> `readonly` **roles**: [`RolesResource`](RolesResource.md)

Defined in: [client.ts:1324](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1324)

***

### search

> `readonly` **search**: [`SearchResource`](SearchResource.md)

Defined in: [client.ts:1325](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1325)

***

### servers

> `readonly` **servers**: `ServersResource`

Defined in: [client.ts:1308](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1308)

***

### subnets

> `readonly` **subnets**: [`SubnetsResource`](SubnetsResource.md)

Defined in: [client.ts:1326](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1326)

***

### system

> `readonly` **system**: [`SystemResource`](SystemResource.md)

Defined in: [client.ts:1327](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1327)

***

### tasks

> `readonly` **tasks**: [`TasksResource`](TasksResource.md)

Defined in: [client.ts:1328](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1328)

***

### users

> `readonly` **users**: [`UsersResource`](UsersResource.md)

Defined in: [client.ts:1329](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1329)

***

### vpsPlans

> `readonly` **vpsPlans**: [`VPSPlansResource`](VPSPlansResource.md)

Defined in: [client.ts:1330](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1330)

## Methods

### getConfig()

> **getConfig**(): `Readonly`\<[`TenantosClientConfig`](../interfaces/TenantosClientConfig.md)\>

Defined in: [client.ts:1587](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1587)

Get the client configuration (readonly)

Returns a readonly copy of the client configuration that was
provided during client initialization. This can be useful for
debugging or logging purposes.

#### Returns

`Readonly`\<[`TenantosClientConfig`](../interfaces/TenantosClientConfig.md)\>

Readonly copy of the client configuration

#### Example

```typescript
const config = client.getConfig();
console.log(`Base URL: ${config.baseUrl}`);
console.log(`Debug mode: ${config.debug}`);
```

***

### getSystemTimezones()

> **getSystemTimezones**(): `Promise`\<`string`[]\>

Defined in: [client.ts:1531](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1531)

Get available system timezones

Retrieves a list of all available timezones that can be used
for system configuration and scheduling operations.

#### Returns

`Promise`\<`string`[]\>

Promise that resolves to an array of timezone strings

#### Throws

If the request fails

#### Example

```typescript
const timezones = await client.getSystemTimezones();
console.log('Available timezones:', timezones);
```

***

### getSystemVersion()

> **getSystemVersion**(): `Promise`\<[`SystemVersion`](../interfaces/SystemVersion.md)\>

Defined in: [client.ts:1507](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1507)

Get system version information

Retrieves version information about the TenantOS system, including
the current software version and build information.

#### Returns

`Promise`\<[`SystemVersion`](../interfaces/SystemVersion.md)\>

Promise that resolves to system version information

#### Throws

If the request fails

#### Example

```typescript
const version = await client.getSystemVersion();
console.log(`TenantOS version: ${version.version}`);
```

***

### ping()

> **ping**(): `Promise`\<`boolean`\>

Defined in: [client.ts:1559](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1559)

Test API connectivity and authentication

Performs a simple ping request to verify that the client can
successfully connect to the TenantOS API and that the provided
authentication credentials are valid.

#### Returns

`Promise`\<`boolean`\>

Promise that resolves to true if connection is successful, false otherwise

#### Example

```typescript
const isConnected = await client.ping();
if (isConnected) {
  console.log('Successfully connected to TenantOS API');
} else {
  console.log('Failed to connect to TenantOS API');
}
```

***

### request()

> **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [client.ts:1433](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/client.ts#L1433)

Make a raw request to the API with automatic retry logic

This is the core method that handles all HTTP requests to the TenantOS API.
It includes automatic retry logic for transient failures, comprehensive error
handling, and request/response logging when debug mode is enabled.

The method will automatically retry requests that fail due to:
- Network connectivity issues
- Server errors (5xx status codes)
- Rate limiting (429 status code)

#### Type Parameters

##### T

`T`

The expected type of the response data

#### Parameters

##### config

[`RequestConfig`](../interfaces/RequestConfig.md)

Request configuration including method, URL, data, and parameters

#### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Promise that resolves to the API response

#### Throws

For API-related errors (4xx, 5xx responses)

#### Throws

For network connectivity issues

#### Throws

For request timeouts

#### Example

```typescript
// Make a GET request
const response = await client.request<Server>({
  method: 'GET',
  url: '/api/servers/123'
});

// Make a POST request with data
const response = await client.request<Server>({
  method: 'POST',
  url: '/api/servers',
  data: {
    hostname: 'new-server.example.com',
    servername: 'New Server'
  }
});
```

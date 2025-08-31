[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ServerStatisticsResource

# Class: ServerStatisticsResource

Defined in: [server-extensions.ts:948](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L948)

Server Statistics resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerStatisticsResource**(`client`, `serverId`): `ServerStatisticsResource`

Defined in: [server-extensions.ts:949](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L949)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerStatisticsResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### getAvailableStatistics()

> **getAvailableStatistics**(): `Promise`\<`string`[]\>

Defined in: [server-extensions.ts:1003](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L1003)

#### Returns

`Promise`\<`string`[]\>

***

### getCPUStats()

> **getCPUStats**(`statsMode`, `data?`): `Promise`\<[`CPUStats`](../interfaces/CPUStats.md)[]\>

Defined in: [server-extensions.ts:973](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L973)

#### Parameters

##### statsMode

`string`

##### data?

`any`

#### Returns

`Promise`\<[`CPUStats`](../interfaces/CPUStats.md)[]\>

***

### getDiskIOStats()

> **getDiskIOStats**(`statsMode`, `data?`): `Promise`\<[`DiskIOStats`](../interfaces/DiskIOStats.md)[]\>

Defined in: [server-extensions.ts:993](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L993)

#### Parameters

##### statsMode

`string`

##### data?

`any`

#### Returns

`Promise`\<[`DiskIOStats`](../interfaces/DiskIOStats.md)[]\>

***

### getIPMIStats()

> **getIPMIStats**(`statsMode`, `data?`): `Promise`\<`any`[]\>

Defined in: [server-extensions.ts:963](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L963)

#### Parameters

##### statsMode

`string`

##### data?

`any`

#### Returns

`Promise`\<`any`[]\>

***

### getMemoryStats()

> **getMemoryStats**(`statsMode`, `data?`): `Promise`\<[`MemoryStats`](../interfaces/MemoryStats.md)[]\>

Defined in: [server-extensions.ts:983](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L983)

#### Parameters

##### statsMode

`string`

##### data?

`any`

#### Returns

`Promise`\<[`MemoryStats`](../interfaces/MemoryStats.md)[]\>

***

### getNetworkStats()

> **getNetworkStats**(`statsMode`, `data?`): `Promise`\<[`NetworkStats`](../interfaces/NetworkStats.md)[]\>

Defined in: [server-extensions.ts:953](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L953)

#### Parameters

##### statsMode

`string`

##### data?

`any`

#### Returns

`Promise`\<[`NetworkStats`](../interfaces/NetworkStats.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L82)

Make a request to the API with automatic error handling

#### Type Parameters

##### T

`T`

#### Parameters

##### config

[`RequestConfig`](../interfaces/RequestConfig.md)

#### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

#### Inherited from

`BaseResource.request`

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L89)

Validate that an ID is a positive integer

#### Parameters

##### id

`number`

##### resourceName

`string` = `'Resource'`

#### Returns

`void`

#### Inherited from

`BaseResource.validateId`

***

### validateRequiredString()

> `protected` **validateRequiredString**(`value`, `fieldName`): `void`

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L98)

Validate required string field

#### Parameters

##### value

`string`

##### fieldName

`string`

#### Returns

`void`

#### Inherited from

`BaseResource.validateRequiredString`

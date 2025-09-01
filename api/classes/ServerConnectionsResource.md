[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerConnectionsResource

# Class: ServerConnectionsResource

Defined in: [server-extensions.ts:516](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L516)

Server Connections resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerConnectionsResource**(`client`, `serverId`): `ServerConnectionsResource`

Defined in: [server-extensions.ts:517](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L517)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerConnectionsResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

Defined in: [server-extensions.ts:530](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L530)

#### Parameters

##### data

`Partial`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

#### Returns

`Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:575](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L575)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### executeAction()

> **executeAction**(`testConnectionId`, `serverConnectionAction`, `data?`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:602](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L602)

#### Parameters

##### testConnectionId

`number`

##### serverConnectionAction

`string`

##### data?

`any`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

Defined in: [server-extensions.ts:544](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L544)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

***

### list()

> **list**(): `Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)[]\>

Defined in: [server-extensions.ts:521](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L521)

#### Returns

`Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L82)

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

### test()

> **test**(`testConnectionId`): `Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

Defined in: [server-extensions.ts:584](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L584)

#### Parameters

##### testConnectionId

`number`

#### Returns

`Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

Defined in: [server-extensions.ts:559](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L559)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

#### Returns

`Promise`\<[`ServerConnection`](../interfaces/ServerConnection.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L98)

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

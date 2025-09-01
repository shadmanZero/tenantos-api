[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerActivityLogResource

# Class: ServerActivityLogResource

Defined in: [server-extensions.ts:1034](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L1034)

Server Activity Log resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerActivityLogResource**(`client`, `serverId`): `ServerActivityLogResource`

Defined in: [server-extensions.ts:1035](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L1035)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerActivityLogResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### get()

> **get**(): `Promise`\<`any`[]\>

Defined in: [server-extensions.ts:1039](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/server-extensions.ts#L1039)

#### Returns

`Promise`\<`any`[]\>

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

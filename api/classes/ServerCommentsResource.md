[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ServerCommentsResource

# Class: ServerCommentsResource

Defined in: [server-extensions.ts:444](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L444)

Server Comments resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerCommentsResource**(`client`, `serverId`): `ServerCommentsResource`

Defined in: [server-extensions.ts:445](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L445)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerCommentsResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<[`ServerComment`](../interfaces/ServerComment.md)\>

Defined in: [server-extensions.ts:458](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L458)

#### Parameters

##### data

`Partial`\<[`ServerComment`](../interfaces/ServerComment.md)\>

#### Returns

`Promise`\<[`ServerComment`](../interfaces/ServerComment.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:503](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L503)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`ServerComment`](../interfaces/ServerComment.md)\>

Defined in: [server-extensions.ts:472](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L472)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`ServerComment`](../interfaces/ServerComment.md)\>

***

### list()

> **list**(): `Promise`\<[`ServerComment`](../interfaces/ServerComment.md)[]\>

Defined in: [server-extensions.ts:449](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L449)

#### Returns

`Promise`\<[`ServerComment`](../interfaces/ServerComment.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L82)

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

### update()

> **update**(`id`, `data`): `Promise`\<[`ServerComment`](../interfaces/ServerComment.md)\>

Defined in: [server-extensions.ts:487](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L487)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`ServerComment`](../interfaces/ServerComment.md)\>

#### Returns

`Promise`\<[`ServerComment`](../interfaces/ServerComment.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/server-extensions.ts#L98)

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

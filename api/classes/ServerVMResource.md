[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerVMResource

# Class: ServerVMResource

Defined in: [server-extensions.ts:920](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L920)

Server VM Resources resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerVMResource**(`client`, `serverId`): `ServerVMResource`

Defined in: [server-extensions.ts:921](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L921)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerVMResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### get()

> **get**(): `Promise`\<`any`\>

Defined in: [server-extensions.ts:925](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L925)

#### Returns

`Promise`\<`any`\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L82)

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

> **update**(`data`): `Promise`\<`any`\>

Defined in: [server-extensions.ts:934](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L934)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L98)

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

[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ServerNetworkResource

# Class: ServerNetworkResource

Defined in: [server-extensions.ts:807](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L807)

Server Network Management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerNetworkResource**(`client`, `serverId`): `ServerNetworkResource`

Defined in: [server-extensions.ts:808](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L808)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerNetworkResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### getManageableNetworkPorts()

> **getManageableNetworkPorts**(): `Promise`\<`any`[]\>

Defined in: [server-extensions.ts:820](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L820)

#### Returns

`Promise`\<`any`[]\>

***

### regenerateVlanConfiguration()

> **regenerateVlanConfiguration**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:812](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L812)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L82)

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

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/server-extensions.ts#L98)

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

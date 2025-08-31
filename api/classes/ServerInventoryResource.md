[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ServerInventoryResource

# Class: ServerInventoryResource

Defined in: [server-extensions.ts:708](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L708)

Server Inventory resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerInventoryResource**(`client`, `serverId`): `ServerInventoryResource`

Defined in: [server-extensions.ts:709](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L709)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerInventoryResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

Defined in: [server-extensions.ts:722](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L722)

#### Parameters

##### data

`Partial`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

#### Returns

`Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:767](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L767)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

Defined in: [server-extensions.ts:736](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L736)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

***

### getHardwareSummary()

> **getHardwareSummary**(): `Promise`\<`any`\>

Defined in: [server-extensions.ts:776](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L776)

#### Returns

`Promise`\<`any`\>

***

### getHardwareSummaryWithDetails()

> **getHardwareSummaryWithDetails**(): `Promise`\<`any`\>

Defined in: [server-extensions.ts:785](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L785)

#### Returns

`Promise`\<`any`\>

***

### getInventoryCommand()

> **getInventoryCommand**(): `Promise`\<`string`\>

Defined in: [server-extensions.ts:794](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L794)

#### Returns

`Promise`\<`string`\>

***

### list()

> **list**(): `Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)[]\>

Defined in: [server-extensions.ts:713](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L713)

#### Returns

`Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)[]\>

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

### update()

> **update**(`id`, `data`): `Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

Defined in: [server-extensions.ts:751](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/server-extensions.ts#L751)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

#### Returns

`Promise`\<[`ServerInventoryItem`](../interfaces/ServerInventoryItem.md)\>

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

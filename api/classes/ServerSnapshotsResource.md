[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerSnapshotsResource

# Class: ServerSnapshotsResource

Defined in: [server-extensions.ts:390](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L390)

Server Snapshots resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerSnapshotsResource**(`client`, `serverId`): `ServerSnapshotsResource`

Defined in: [server-extensions.ts:391](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L391)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerSnapshotsResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:404](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L404)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### delete()

> **delete**(`snapshotId?`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:412](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L412)

#### Parameters

##### snapshotId?

`string`

#### Returns

`Promise`\<`void`\>

***

### getAvailable()

> **getAvailable**(): `Promise`\<[`ServerSnapshot`](../interfaces/ServerSnapshot.md)[]\>

Defined in: [server-extensions.ts:431](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L431)

#### Returns

`Promise`\<[`ServerSnapshot`](../interfaces/ServerSnapshot.md)[]\>

***

### list()

> **list**(): `Promise`\<[`ServerSnapshot`](../interfaces/ServerSnapshot.md)[]\>

Defined in: [server-extensions.ts:395](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L395)

#### Returns

`Promise`\<[`ServerSnapshot`](../interfaces/ServerSnapshot.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L82)

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

### rollback()

> **rollback**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:423](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L423)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L98)

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

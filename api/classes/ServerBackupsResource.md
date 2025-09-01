[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerBackupsResource

# Class: ServerBackupsResource

Defined in: [server-extensions.ts:336](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L336)

Server Backups resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerBackupsResource**(`client`, `serverId`): `ServerBackupsResource`

Defined in: [server-extensions.ts:337](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L337)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerBackupsResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:350](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L350)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### delete()

> **delete**(`backupId?`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:358](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L358)

#### Parameters

##### backupId?

`string`

#### Returns

`Promise`\<`void`\>

***

### getAvailable()

> **getAvailable**(): `Promise`\<[`ServerBackup`](../interfaces/ServerBackup.md)[]\>

Defined in: [server-extensions.ts:377](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L377)

#### Returns

`Promise`\<[`ServerBackup`](../interfaces/ServerBackup.md)[]\>

***

### list()

> **list**(): `Promise`\<[`ServerBackup`](../interfaces/ServerBackup.md)[]\>

Defined in: [server-extensions.ts:341](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L341)

#### Returns

`Promise`\<[`ServerBackup`](../interfaces/ServerBackup.md)[]\>

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

### restore()

> **restore**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:369](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L369)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

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

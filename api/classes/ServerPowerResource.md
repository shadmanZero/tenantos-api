[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ServerPowerResource

# Class: ServerPowerResource

Defined in: [server-extensions.ts:894](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L894)

Server Power Management resource (extended)

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerPowerResource**(`client`, `serverId`): `ServerPowerResource`

Defined in: [server-extensions.ts:895](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L895)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerPowerResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### executeCommand()

> **executeCommand**(`data`): `Promise`\<`any`\>

Defined in: [server-extensions.ts:906](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L906)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

***

### executeMethod()

> **executeMethod**(`serverPowerMethod`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:899](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L899)

#### Parameters

##### serverPowerMethod

`string`

#### Returns

`Promise`\<`void`\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L82)

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

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/server-extensions.ts#L98)

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

[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / OSResource

# Class: OSResource

Defined in: [resources.ts:1751](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L1751)

OS List resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new OSResource**(`client`): `OSResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`OSResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### list()

> **list**(`data?`): `Promise`\<`any`[]\>

Defined in: [resources.ts:1752](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L1752)

#### Parameters

##### data?

`any`

#### Returns

`Promise`\<`any`[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L90)

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

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/resources.ts#L106)

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

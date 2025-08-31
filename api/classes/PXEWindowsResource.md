[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / PXEWindowsResource

# Class: PXEWindowsResource

Defined in: [resources.ts:420](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L420)

PXE Windows management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new PXEWindowsResource**(`client`): `PXEWindowsResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`PXEWindowsResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### getWindowsInformation()

> **getWindowsInformation**(`data`): `Promise`\<`any`\>

Defined in: [resources.ts:429](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L429)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

***

### importWindows()

> **importWindows**(`data`): `Promise`\<`void`\>

Defined in: [resources.ts:421](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L421)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L90)

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

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L106)

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

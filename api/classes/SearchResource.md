[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / SearchResource

# Class: SearchResource

Defined in: [resources.ts:822](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L822)

Search functionality resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new SearchResource**(`client`): `SearchResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`SearchResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### quickSearch()

> **quickSearch**(`query`): `Promise`\<[`SearchResult`](../interfaces/SearchResult.md)[]\>

Defined in: [resources.ts:823](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L823)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`SearchResult`](../interfaces/SearchResult.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L90)

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

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L106)

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

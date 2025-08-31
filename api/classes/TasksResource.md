[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / TasksResource

# Class: TasksResource

Defined in: [resources.ts:1203](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L1203)

Task tracking resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new TasksResource**(`client`): `TasksResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`TasksResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### get()

> **get**(`id`): `Promise`\<[`Task`](../interfaces/Task.md)\>

Defined in: [resources.ts:1204](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L1204)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Task`](../interfaces/Task.md)\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L90)

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

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/resources.ts#L106)

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

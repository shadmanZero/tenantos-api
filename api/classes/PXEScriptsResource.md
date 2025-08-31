[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / PXEScriptsResource

# Class: PXEScriptsResource

Defined in: [resources.ts:254](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L254)

PXE Scripts management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new PXEScriptsResource**(`client`): `PXEScriptsResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`PXEScriptsResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

Defined in: [resources.ts:279](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L279)

#### Parameters

##### data

###### allow_for_dedicated?

`boolean`

**Example**

```ts
false
```

###### allow_for_vps?

`boolean`

**Example**

```ts
false
```

###### dont_offer_if_has_tag?

`string`[]

**Example**

```ts
[
      "sit"
    ]
```

###### dont_offer_if_user_has_role?

`string`[]

**Example**

```ts
[
      null
    ]
```

###### isDisabled?

`boolean`

**Example**

```ts
true
```

###### name

`string`

**Example**

```ts
quo
```

###### offer_if_has_tag?

`string`[]

**Example**

```ts
[
      "adipisci"
    ]
```

###### offer_if_user_has_role?

`string`[]

**Example**

```ts
[
      null
    ]
```

###### script

`string`

**Description**

Script will be executed on after the installation has been completed.

**Example**

```ts
touch /root/123
```

###### tags

`string`[]

**Description**

The script is linked to the operating systems via tags.

**Example**

```ts
[
      "kickstart"
    ]
```

#### Returns

`Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:309](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L309)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### duplicate()

> **duplicate**(`pxeScriptId`): `Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

Defined in: [resources.ts:318](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L318)

#### Parameters

##### pxeScriptId

`number`

#### Returns

`Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

***

### get()

> **get**(`id`): `Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

Defined in: [resources.ts:264](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L264)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

***

### list()

> **list**(): `Promise`\<[`PXEScript`](../interfaces/PXEScript.md)[]\>

Defined in: [resources.ts:255](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L255)

#### Returns

`Promise`\<[`PXEScript`](../interfaces/PXEScript.md)[]\>

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

### update()

> **update**(`id`, `data`): `Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

Defined in: [resources.ts:293](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/resources.ts#L293)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreatePXEScriptRequest`](../type-aliases/CreatePXEScriptRequest.md)\>

#### Returns

`Promise`\<[`PXEScript`](../interfaces/PXEScript.md)\>

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

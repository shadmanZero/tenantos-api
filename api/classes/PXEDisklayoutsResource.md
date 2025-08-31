[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / PXEDisklayoutsResource

# Class: PXEDisklayoutsResource

Defined in: [resources.ts:337](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L337)

PXE Disklayouts management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new PXEDisklayoutsResource**(`client`): `PXEDisklayoutsResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`PXEDisklayoutsResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

Defined in: [resources.ts:362](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L362)

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
true
```

###### disklayout?

`string`

**Description**

The kickstart or preseed configuration.

**Example**

```ts
autopart --type=lvm
```

###### dont_offer_if_has_tag?

`string`[]

**Example**

```ts
[
      "odit"
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

###### hw_raid_handling?

`string`

**Description**

Must be one of <code>always_offer</code>, <code>only_offer_if_hw_raid</code>, or <code>dont_offer_if_hw_raid</code>.

**Example**

```ts
dont_offer_if_hw_raid
```

###### isDisabled?

`boolean`

**Example**

```ts
true
```

###### min_disks?

`number`

**Description**

The profile will only be offered if the server has the specificated minimum amount of disks. Leave empty to always offer.

**Example**

```ts
3
```

###### name

`string`

**Example**

```ts
accusamus
```

###### offer_if_has_tag?

`string`[]

**Example**

```ts
[
      "rerum"
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

###### tags

`string`[]

**Description**

Must have at least 1 item. The disk layout is linked to the operating systems via tags.

**Example**

```ts
[
      "kickstart"
    ]
```

#### Returns

`Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:392](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L392)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### duplicate()

> **duplicate**(`pxeDisklayoutId`): `Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

Defined in: [resources.ts:401](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L401)

#### Parameters

##### pxeDisklayoutId

`number`

#### Returns

`Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

***

### get()

> **get**(`id`): `Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

Defined in: [resources.ts:347](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L347)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

***

### list()

> **list**(): `Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)[]\>

Defined in: [resources.ts:338](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L338)

#### Returns

`Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)[]\>

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

### update()

> **update**(`id`, `data`): `Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

Defined in: [resources.ts:376](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L376)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreatePXEDisklayoutRequest`](../type-aliases/CreatePXEDisklayoutRequest.md)\>

#### Returns

`Promise`\<[`PXEDisklayout`](../interfaces/PXEDisklayout.md)\>

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

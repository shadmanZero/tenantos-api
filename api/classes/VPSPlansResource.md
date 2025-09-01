[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / VPSPlansResource

# Class: VPSPlansResource

Defined in: [resources.ts:1567](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1567)

VPS Plans management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new VPSPlansResource**(`client`): `VPSPlansResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`VPSPlansResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### balancerPlans

> `readonly` **balancerPlans**: `object`

Defined in: [resources.ts:1650](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1650)

#### create()

> **create**: (`data`) => `Promise`\<`any`\>

##### Parameters

###### data

`any`

##### Returns

`Promise`\<`any`\>

#### delete()

> **delete**: (`id`) => `Promise`\<`void`\>

##### Parameters

###### id

`number`

##### Returns

`Promise`\<`void`\>

#### get()

> **get**: (`id`) => `Promise`\<`any`\>

##### Parameters

###### id

`number`

##### Returns

`Promise`\<`any`\>

#### list()

> **list**: () => `Promise`\<`any`[]\>

##### Returns

`Promise`\<`any`[]\>

#### testConfiguration()

> **testConfiguration**: (`data`) => `Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

##### Parameters

###### data

`any`

##### Returns

`Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

#### update()

> **update**: (`id`, `data`) => `Promise`\<`any`\>

##### Parameters

###### id

`number`

###### data

`any`

##### Returns

`Promise`\<`any`\>

***

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### create()

> **create**(`data`): `Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

Defined in: [resources.ts:1595](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1595)

#### Parameters

##### data

###### planconfig

`Record`\<`string`, `never`\>

**Description**

The plan configuration.

**Example**

```ts
[
      {
        "information": "See GET api/virtualization/vpsplans/{id} for a list of values - values may differ depending on the virtualization platform"
      }
    ]
```

###### planname

`string`

**Example**

```ts
et
```

###### providerId

`number`

**Example**

```ts
3
```

#### Returns

`Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:1625](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1625)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### duplicate()

> **duplicate**(`vpsplan`): `Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

Defined in: [resources.ts:1634](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1634)

#### Parameters

##### vpsplan

`number`

#### Returns

`Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

***

### get()

> **get**(`id`): `Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

Defined in: [resources.ts:1580](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1580)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

***

### getAssignableSubnets()

> **getAssignableSubnets**(): `Promise`\<[`Subnet`](../interfaces/Subnet.md)[]\>

Defined in: [resources.ts:1721](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1721)

#### Returns

`Promise`\<[`Subnet`](../interfaces/Subnet.md)[]\>

***

### list()

> **list**(`options`): `Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)[]\>

Defined in: [resources.ts:1568](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1568)

#### Parameters

##### options

[`ListOptions`](../interfaces/ListOptions.md)\<[`VPSPlanFilters`](../interfaces/VPSPlanFilters.md)\> = `{}`

#### Returns

`Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L90)

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

> **update**(`id`, `data`): `Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

Defined in: [resources.ts:1609](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L1609)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreateVPSPlanRequest`](../type-aliases/CreateVPSPlanRequest.md)\>

#### Returns

`Promise`\<[`VPSPlan`](../interfaces/VPSPlan.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L106)

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

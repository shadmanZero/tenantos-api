[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / SubnetsResource

# Class: SubnetsResource

Defined in: [resources.ts:837](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L837)

Subnets management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new SubnetsResource**(`client`): `SubnetsResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`SubnetsResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### childsMassActions()

> **childsMassActions**(`subnetId`, `data`): `Promise`\<`void`\>

Defined in: [resources.ts:929](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L929)

#### Parameters

##### subnetId

`number`

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### create()

> **create**(`data`): `Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

Defined in: [resources.ts:880](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L880)

#### Parameters

##### data

###### access_vlan_generation_mode?

`string`

**Description**

Must be one of <code>fixed</code> or <code>range</code>.

**Example**

```ts
fixed
```

###### cidr

`number`

**Description**

The CIDR notation, optional if netmask is set.

**Example**

```ts
24
```

###### copy_network_automation_configuration_to_childs?

`boolean`

**Example**

```ts
true
```

###### description?

`string`

**Description**

Subnet description.

**Example**

```ts
null
```

###### dns_resolvers?

`string`[]

**Description**

An unique array of IPv4 and/or IPv6 addresses. If not empty, a minimum of two is required and a maximum of three allowed. Defaults to Google DNS.

**Example**

```ts
[
      "1.1.1.1",
      "1.0.0.1",
      "8.8.8.8"
    ]
```

###### dont_offer_if_server_has_tag?

`string`[]

**Example**

```ts
[
      "fugit"
    ]
```

###### enable_switch_automation?

`boolean`

**Example**

```ts
false
```

###### exclude_from_dynamic_ip_assignments?

`boolean`

**Example**

```ts
false
```

###### generateIps?

`boolean`

**Example**

```ts
true
```

###### gw

`string`

**Description**

The gateway IP.

**Example**

```ts
10.10.11.1
```

###### netmask

`string`

**Description**

The netmask, optional if cidr is set.

**Example**

```ts
255.255.255.0
```

###### offer_if_server_has_tag?

`string`[]

**Example**

```ts
[
      "adipisci"
    ]
```

###### only_if_server_has_remote_agents?

`number`[]

**Example**

```ts
[
      7
    ]
```

###### priority?

`number`

**Description**

Subnet priority. Used for virtual server provisioning.

**Example**

```ts
null
```

###### range_end_access_vlan_id?

`number`

**Description**

Must not be greater than 4094.

**Example**

```ts
2884
```

###### range_start_access_vlan_id?

`number`

**Description**

Must be at least 1.

**Example**

```ts
1
```

###### reserve_broadcast_ip?

`boolean`

**Description**

Defaults to true if not set.

**Example**

```ts
null
```

###### reserve_first_usable_ip?

`boolean`

**Description**

Defaults to false if not set.

**Example**

```ts
null
```

###### reserve_gateway_ip?

`boolean`

**Description**

Defaults to true if not set.

**Example**

```ts
null
```

###### reserve_last_usable_ip?

`boolean`

**Description**

Defaults to false if not set.

**Example**

```ts
null
```

###### reserve_network_address?

`boolean`

**Description**

Defaults to true if not set.

**Example**

```ts
null
```

###### reuse_access_vlan?

`boolean`

**Example**

```ts
false
```

###### static_access_vlan_id?

`number`

**Example**

```ts
8
```

###### subnet

`string`

**Description**

Must be a valid IP address (network address).

**Example**

```ts
10.10.11.0
```

###### trunk_vlans?

`number`[]

**Description**

Must be at least 1. Must not be greater than 4094.

**Example**

```ts
[
      1441
    ]
```

###### type

`string`

**Description**

Must be one of v4 or v6.

**Example**

```ts
v4
```

###### use_existing_port_access_vlan?

`boolean`

**Example**

```ts
true
```

###### userId?

`number`

**Example**

```ts
12
```

###### vlan_layer3_ip?

`string`

**Example**

```ts
est
```

###### vlan_layer3_mode?

`string`

**Description**

Must be one of <code>none</code>, <code>gateway</code>, or <code>custom</code>.

**Example**

```ts
custom
```

###### vlan_mode?

`string`

**Description**

Must be one of <code>access</code> or <code>native+trunk</code>.

**Example**

```ts
access
```

###### vlan_remove_layer3_ip_on_unassign?

`boolean`

**Example**

```ts
true
```

#### Returns

`Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

***

### createRdnsAssignment()

> **createRdnsAssignment**(`subnet`, `data`): `Promise`\<`void`\>

Defined in: [resources.ts:962](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L962)

#### Parameters

##### subnet

`string`

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:910](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L910)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### deleteRdnsAssignment()

> **deleteRdnsAssignment**(`subnet`): `Promise`\<`void`\>

Defined in: [resources.ts:970](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L970)

#### Parameters

##### subnet

`string`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

Defined in: [resources.ts:850](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L850)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

***

### getRdnsAssignment()

> **getRdnsAssignment**(`subnetId`): `Promise`\<`any`\>

Defined in: [resources.ts:951](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L951)

#### Parameters

##### subnetId

`number`

#### Returns

`Promise`\<`any`\>

***

### getWithDetails()

> **getWithDetails**(`subnetId`): `Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

Defined in: [resources.ts:865](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L865)

#### Parameters

##### subnetId

`number`

#### Returns

`Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

***

### list()

> **list**(`options`): `Promise`\<[`Subnet`](../interfaces/Subnet.md)[]\>

Defined in: [resources.ts:838](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L838)

#### Parameters

##### options

[`ListOptions`](../interfaces/ListOptions.md)\<[`SubnetFilters`](../interfaces/SubnetFilters.md)\> = `{}`

#### Returns

`Promise`\<[`Subnet`](../interfaces/Subnet.md)[]\>

***

### listFreeIps()

> **listFreeIps**(`subnetId`): `Promise`\<`string`[]\>

Defined in: [resources.ts:939](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L939)

#### Parameters

##### subnetId

`number`

#### Returns

`Promise`\<`string`[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L90)

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

### split()

> **split**(`subnetId`, `data`): `Promise`\<`void`\>

Defined in: [resources.ts:919](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L919)

#### Parameters

##### subnetId

`number`

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

Defined in: [resources.ts:894](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L894)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreateSubnetRequest`](../type-aliases/CreateSubnetRequest.md)\>

#### Returns

`Promise`\<[`Subnet`](../interfaces/Subnet.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/resources.ts#L106)

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

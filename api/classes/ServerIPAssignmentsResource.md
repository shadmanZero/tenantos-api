[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerIPAssignmentsResource

# Class: ServerIPAssignmentsResource

Defined in: [server-extensions.ts:616](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L616)

Server IP Assignments resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerIPAssignmentsResource**(`client`, `serverId`): `ServerIPAssignmentsResource`

Defined in: [server-extensions.ts:617](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L617)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerIPAssignmentsResource`

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

> **create**(`data`): `Promise`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)\>

Defined in: [server-extensions.ts:630](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L630)

#### Parameters

##### data

`Partial`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)\>

#### Returns

`Promise`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)\>

***

### createDynamicIpAssignments()

> **createDynamicIpAssignments**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:696](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L696)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### createRdns()

> **createRdns**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:688](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L688)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:660](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L660)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### getAssignableIpsOfSubnet()

> **getAssignableIpsOfSubnet**(`data`): `Promise`\<`string`[]\>

Defined in: [server-extensions.ts:678](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L678)

#### Parameters

##### data

###### subnetId

`number`

#### Returns

`Promise`\<`string`[]\>

***

### getAssignableSubnets()

> **getAssignableSubnets**(): `Promise`\<`any`[]\>

Defined in: [server-extensions.ts:669](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L669)

#### Returns

`Promise`\<`any`[]\>

***

### list()

> **list**(): `Promise`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)[]\>

Defined in: [server-extensions.ts:621](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L621)

#### Returns

`Promise`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)[]\>

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

### update()

> **update**(`id`, `data`): `Promise`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)\>

Defined in: [server-extensions.ts:644](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/server-extensions.ts#L644)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)\>

#### Returns

`Promise`\<[`ServerIPAssignment`](../interfaces/ServerIPAssignment.md)\>

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

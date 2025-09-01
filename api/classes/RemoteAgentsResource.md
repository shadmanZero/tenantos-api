[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / RemoteAgentsResource

# Class: RemoteAgentsResource

Defined in: [resources.ts:443](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L443)

Remote Agents management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new RemoteAgentsResource**(`client`): `RemoteAgentsResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`RemoteAgentsResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

***

### ipmiKvmIsos

> `readonly` **ipmiKvmIsos**: `object`

Defined in: [resources.ts:550](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L550)

#### create()

> **create**: (`data`) => `Promise`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)\>

##### Parameters

###### data

`Partial`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)\>

##### Returns

`Promise`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)\>

#### delete()

> **delete**: (`id`) => `Promise`\<`void`\>

##### Parameters

###### id

`number`

##### Returns

`Promise`\<`void`\>

#### get()

> **get**: (`id`) => `Promise`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)\>

##### Parameters

###### id

`number`

##### Returns

`Promise`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)\>

#### list()

> **list**: () => `Promise`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)[]\>

##### Returns

`Promise`\<[`IPMIKVMIso`](../interfaces/IPMIKVMIso.md)[]\>

## Methods

### create()

> **create**(`data`): `Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)\>

Defined in: [resources.ts:471](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L471)

#### Parameters

##### data

###### hostname

`string`

**Example**

```ts
cum
```

###### ip

`string`

**Example**

```ts
in
```

###### name

`string`

**Example**

```ts
non
```

###### password

`string`

**Example**

```ts
inventore
```

###### sshport

`number`

**Example**

```ts
10
```

#### Returns

`Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:501](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L501)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### get()

> **get**(`id`): `Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)\>

Defined in: [resources.ts:456](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L456)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)\>

***

### getAssignments()

> **getAssignments**(`agentId`): `Promise`\<`any`[]\>

Defined in: [resources.ts:528](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L528)

#### Parameters

##### agentId

`number`

#### Returns

`Promise`\<`any`[]\>

***

### list()

> **list**(`options`): `Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)[]\>

Defined in: [resources.ts:444](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L444)

#### Parameters

##### options

[`ListOptions`](../interfaces/ListOptions.md)\<[`RemoteAgentFilters`](../interfaces/RemoteAgentFilters.md)\> = `{}`

#### Returns

`Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)[]\>

***

### reprovisioning()

> **reprovisioning**(`agentId`, `data`): `Promise`\<`void`\>

Defined in: [resources.ts:539](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L539)

#### Parameters

##### agentId

`number`

##### data

`any`

#### Returns

`Promise`\<`void`\>

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

### testConnectivity()

> **testConnectivity**(`agentId`): `Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

Defined in: [resources.ts:510](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L510)

#### Parameters

##### agentId

`number`

#### Returns

`Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)\>

Defined in: [resources.ts:485](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/resources.ts#L485)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreateRemoteAgentRequest`](../type-aliases/CreateRemoteAgentRequest.md)\>

#### Returns

`Promise`\<[`RemoteAgent`](../interfaces/RemoteAgent.md)\>

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

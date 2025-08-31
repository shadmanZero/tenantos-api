[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ServerProvisioningResource

# Class: ServerProvisioningResource

Defined in: [server-extensions.ts:833](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L833)

Server OS Provisioning resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerProvisioningResource**(`client`, `serverId`): `ServerProvisioningResource`

Defined in: [server-extensions.ts:834](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L834)

#### Parameters

##### client

`any`

##### serverId

`number`

#### Returns

`ServerProvisioningResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### executePostCommand()

> **executePostCommand**(): `Promise`\<`any`\>

Defined in: [server-extensions.ts:862](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L862)

#### Returns

`Promise`\<`any`\>

***

### getInstallStatus()

> **getInstallStatus**(): `Promise`\<`any`\>

Defined in: [server-extensions.ts:853](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L853)

#### Returns

`Promise`\<`any`\>

***

### getOsLogo()

> **getOsLogo**(`data`): `Promise`\<`any`\>

Defined in: [server-extensions.ts:880](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L880)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`any`\>

***

### getProfiles()

> **getProfiles**(): `Promise`\<`any`[]\>

Defined in: [server-extensions.ts:871](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L871)

#### Returns

`Promise`\<`any`[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L82)

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

### startReinstallation()

> **startReinstallation**(`data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:838](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L838)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### stopReinstallation()

> **stopReinstallation**(): `Promise`\<`void`\>

Defined in: [server-extensions.ts:846](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L846)

#### Returns

`Promise`\<`void`\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/server-extensions.ts#L98)

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

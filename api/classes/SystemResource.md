[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / SystemResource

# Class: SystemResource

Defined in: [resources.ts:996](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L996)

System management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new SystemResource**(`client`): `SystemResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`SystemResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### backups

> `readonly` **backups**: `object`

Defined in: [resources.ts:998](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L998)

#### create()

> **create**: (`data`) => `Promise`\<`void`\>

##### Parameters

###### data

`any`

##### Returns

`Promise`\<`void`\>

#### getHistory()

> **getHistory**: () => `Promise`\<[`SystemBackup`](../interfaces/SystemBackup.md)[]\>

##### Returns

`Promise`\<[`SystemBackup`](../interfaces/SystemBackup.md)[]\>

#### getHistoryItem()

> **getHistoryItem**: (`backupTaskId`) => `Promise`\<[`SystemBackup`](../interfaces/SystemBackup.md)\>

##### Parameters

###### backupTaskId

`string`

##### Returns

`Promise`\<[`SystemBackup`](../interfaces/SystemBackup.md)\>

#### storages

> **storages**: `object`

##### storages.create()

> **create**: (`data`) => `Promise`\<`any`\>

###### Parameters

###### data

`any`

###### Returns

`Promise`\<`any`\>

##### storages.delete()

> **delete**: (`id`) => `Promise`\<`void`\>

###### Parameters

###### id

`number`

###### Returns

`Promise`\<`void`\>

##### storages.get()

> **get**: (`id`) => `Promise`\<`any`\>

###### Parameters

###### id

`number`

###### Returns

`Promise`\<`any`\>

##### storages.list()

> **list**: () => `Promise`\<`any`[]\>

###### Returns

`Promise`\<`any`[]\>

##### storages.update()

> **update**: (`id`, `data`) => `Promise`\<`any`\>

###### Parameters

###### id

`number`

###### data

`any`

###### Returns

`Promise`\<`any`\>

***

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

***

### logs

> `readonly` **logs**: `object`

Defined in: [resources.ts:1086](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L1086)

#### getAgentLogs()

> **getAgentLogs**: (`agentId`) => `Promise`\<[`SystemLog`](../interfaces/SystemLog.md)[]\>

##### Parameters

###### agentId

`number`

##### Returns

`Promise`\<[`SystemLog`](../interfaces/SystemLog.md)[]\>

#### getSystemLogs()

> **getSystemLogs**: () => `Promise`\<[`SystemLog`](../interfaces/SystemLog.md)[]\>

##### Returns

`Promise`\<[`SystemLog`](../interfaces/SystemLog.md)[]\>

#### getUserLogs()

> **getUserLogs**: () => `Promise`\<[`SystemLog`](../interfaces/SystemLog.md)[]\>

##### Returns

`Promise`\<[`SystemLog`](../interfaces/SystemLog.md)[]\>

***

### settings

> `readonly` **settings**: `object`

Defined in: [resources.ts:1118](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L1118)

#### getGlobalSettings()

> **getGlobalSettings**: () => `Promise`\<[`SystemSetting`](../interfaces/SystemSetting.md)[]\>

##### Returns

`Promise`\<[`SystemSetting`](../interfaces/SystemSetting.md)[]\>

#### getSetting()

> **getSetting**: (`settingName`) => `Promise`\<[`SystemSetting`](../interfaces/SystemSetting.md)\>

##### Parameters

###### settingName

`string`

##### Returns

`Promise`\<[`SystemSetting`](../interfaces/SystemSetting.md)\>

#### updateGlobalSettings()

> **updateGlobalSettings**: (`settings`) => `Promise`\<`void`\>

##### Parameters

###### settings

`Record`\<`string`, `any`\>

##### Returns

`Promise`\<`void`\>

***

### ui

> `readonly` **ui**: `object`

Defined in: [resources.ts:1170](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L1170)

#### getLanguage()

> **getLanguage**: () => `Promise`\<`any`\>

##### Returns

`Promise`\<`any`\>

#### getSettings()

> **getSettings**: () => `Promise`\<`any`\>

##### Returns

`Promise`\<`any`\>

#### getVersion()

> **getVersion**: () => `Promise`\<`any`\>

##### Returns

`Promise`\<`any`\>

## Methods

### getListTimeDateFormats()

> **getListTimeDateFormats**(): `Promise`\<`string`[]\>

Defined in: [resources.ts:1160](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L1160)

#### Returns

`Promise`\<`string`[]\>

***

### getSettingsAfterLogin()

> **getSettingsAfterLogin**(): `Promise`\<`any`\>

Defined in: [resources.ts:1151](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L1151)

#### Returns

`Promise`\<`any`\>

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

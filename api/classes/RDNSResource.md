[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / RDNSResource

# Class: RDNSResource

Defined in: [resources.ts:617](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L617)

Reverse DNS management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new RDNSResource**(`client`): `RDNSResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`RDNSResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

***

### providers

> `readonly` **providers**: `object`

Defined in: [resources.ts:619](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L619)

#### addSubnetAssignment()

> **addSubnetAssignment**: (`provider`, `data`) => `Promise`\<`void`\>

##### Parameters

###### provider

`string`

###### data

`any`

##### Returns

`Promise`\<`void`\>

#### configure()

> **configure**: (`provider`, `config`) => `Promise`\<`void`\>

##### Parameters

###### provider

`string`

###### config

`any`

##### Returns

`Promise`\<`void`\>

#### create()

> **create**: (`data`) => `Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)\>

##### Parameters

###### data

###### data

`Record`\<`string`, `never`\>

**Description**

The access details for the RDNS provider.

**Example**

```ts
{
                         *       "serverName": "ns1.tenantos.com",
                         *       "mysql_host": "10.10.10.2",
                         *       "mysql_port": 9000,
                         *       "mysql_username": "root",
                         *       "mysql_password": "secret",
                         *       "mysql_database": "powerdns"
                         *     }
```

###### type

`string`

**Description**

The RDNS provider.

**Example**

```ts
PowerDNS
```

##### Returns

`Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)\>

#### delete()

> **delete**: (`id`) => `Promise`\<`void`\>

##### Parameters

###### id

`number`

##### Returns

`Promise`\<`void`\>

#### get()

> **get**: (`id`) => `Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)\>

##### Parameters

###### id

`number`

##### Returns

`Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)\>

#### list()

> **list**: () => `Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)[]\>

##### Returns

`Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)[]\>

#### testConnectivity()

> **testConnectivity**: (`provider`) => `Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

##### Parameters

###### provider

`string`

##### Returns

`Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

#### update()

> **update**: (`id`, `data`) => `Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)\>

##### Parameters

###### id

`number`

###### data

`Partial`\<[`CreateRDNSProviderRequest`](../type-aliases/CreateRDNSProviderRequest.md)\>

##### Returns

`Promise`\<[`RDNSProvider`](../interfaces/RDNSProvider.md)\>

## Methods

### createRecord()

> **createRecord**(`data`): `Promise`\<`void`\>

Defined in: [resources.ts:717](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L717)

#### Parameters

##### data

[`RDNSRecord`](../interfaces/RDNSRecord.md)

#### Returns

`Promise`\<`void`\>

***

### deleteRecord()

> **deleteRecord**(`ip`): `Promise`\<`void`\>

Defined in: [resources.ts:733](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L733)

#### Parameters

##### ip

`string`

#### Returns

`Promise`\<`void`\>

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

### updateRecord()

> **updateRecord**(`data`): `Promise`\<`void`\>

Defined in: [resources.ts:725](https://github.com/shadmanZero/tenantos-api/blob/fe61944d7cb3ee6cc3061a8309e45287291cb501/src/resources.ts#L725)

#### Parameters

##### data

[`RDNSRecord`](../interfaces/RDNSRecord.md)

#### Returns

`Promise`\<`void`\>

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

[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / UsersResource

# Class: UsersResource

Defined in: [resources.ts:1223](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1223)

Users management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new UsersResource**(`client`): `UsersResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`UsersResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

***

### sshKeys

> `readonly` **sshKeys**: `object`

Defined in: [resources.ts:1454](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1454)

#### create()

> **create**: (`user`, `data`) => `Promise`\<[`SSHKey`](../interfaces/SSHKey.md)\>

##### Parameters

###### user

`number`

###### data

`Partial`\<[`SSHKey`](../interfaces/SSHKey.md)\>

##### Returns

`Promise`\<[`SSHKey`](../interfaces/SSHKey.md)\>

#### delete()

> **delete**: (`user`, `id`) => `Promise`\<`void`\>

##### Parameters

###### user

`number`

###### id

`number`

##### Returns

`Promise`\<`void`\>

#### get()

> **get**: (`user`, `id`) => `Promise`\<[`SSHKey`](../interfaces/SSHKey.md)\>

##### Parameters

###### user

`number`

###### id

`number`

##### Returns

`Promise`\<[`SSHKey`](../interfaces/SSHKey.md)\>

#### list()

> **list**: (`user`) => `Promise`\<[`SSHKey`](../interfaces/SSHKey.md)[]\>

##### Parameters

###### user

`number`

##### Returns

`Promise`\<[`SSHKey`](../interfaces/SSHKey.md)[]\>

#### update()

> **update**: (`user`, `id`, `data`) => `Promise`\<[`SSHKey`](../interfaces/SSHKey.md)\>

##### Parameters

###### user

`number`

###### id

`number`

###### data

`Partial`\<[`SSHKey`](../interfaces/SSHKey.md)\>

##### Returns

`Promise`\<[`SSHKey`](../interfaces/SSHKey.md)\>

***

### tokens

> `readonly` **tokens**: `object`

Defined in: [resources.ts:1381](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1381)

#### create()

> **create**: (`user`, `data`) => `Promise`\<[`UserToken`](../interfaces/UserToken.md)\>

##### Parameters

###### user

`number`

###### data

`Partial`\<[`UserToken`](../interfaces/UserToken.md)\>

##### Returns

`Promise`\<[`UserToken`](../interfaces/UserToken.md)\>

#### delete()

> **delete**: (`user`, `id`) => `Promise`\<`void`\>

##### Parameters

###### user

`number`

###### id

`number`

##### Returns

`Promise`\<`void`\>

#### get()

> **get**: (`user`, `id`) => `Promise`\<[`UserToken`](../interfaces/UserToken.md)\>

##### Parameters

###### user

`number`

###### id

`number`

##### Returns

`Promise`\<[`UserToken`](../interfaces/UserToken.md)\>

#### list()

> **list**: (`user`) => `Promise`\<[`UserToken`](../interfaces/UserToken.md)[]\>

##### Parameters

###### user

`number`

##### Returns

`Promise`\<[`UserToken`](../interfaces/UserToken.md)[]\>

#### update()

> **update**: (`user`, `id`, `data`) => `Promise`\<[`UserToken`](../interfaces/UserToken.md)\>

##### Parameters

###### user

`number`

###### id

`number`

###### data

`Partial`\<[`UserToken`](../interfaces/UserToken.md)\>

##### Returns

`Promise`\<[`UserToken`](../interfaces/UserToken.md)\>

***

### twoFactor

> `readonly` **twoFactor**: `object`

Defined in: [resources.ts:1527](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1527)

#### disable()

> **disable**: (`user`) => `Promise`\<`void`\>

##### Parameters

###### user

`number`

##### Returns

`Promise`\<`void`\>

#### enable()

> **enable**: (`user`, `data`) => `Promise`\<`void`\>

##### Parameters

###### user

`number`

###### data

`any`

##### Returns

`Promise`\<`void`\>

## Methods

### addAdditionalUserInformation()

> **addAdditionalUserInformation**(`data`): `Promise`\<`void`\>

Defined in: [resources.ts:1342](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1342)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### create()

> **create**(`data`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: [resources.ts:1251](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1251)

#### Parameters

##### data

###### accountstatus?

`string`

**Description**

Must be one of <code>enabled</code> or <code>disabled</code>.

**Example**

```ts
disabled
```

###### allowedHosts?

`string`[]

**Description**

Must be an array of valid IP addresses. Login will be restricted to the specified IPs. Leave empty to allow all IPs.

**Example**

```ts
[
      "consectetur"
    ]
```

###### darkmode?

`string`

**Description**

Must be one of <code>0</code> or <code>1</code>.

**Example**

```ts
0
```

###### datetimeFormat?

`string`

**Example**

```ts
nisi
```

###### description?

`string`

**Example**

```ts
nam
```

###### email?

`string`

**Description**

Must be a valid email address.

**Example**

```ts
ismael59@example.org
```

###### language?

`string`

**Example**

```ts
qui
```

###### name

`string`

**Example**

```ts
iste
```

###### password

`string`

**Example**

```ts
similique
```

###### role_id?

`number`

**Example**

```ts
14
```

###### root_owner?

`number`

**Example**

```ts
10
```

###### sessionTimeout?

`string`

**Example**

```ts
null
```

###### timezone?

`string`

**Description**

Must be a valid time zone, such as <code>Africa/Accra</code>.

**Example**

```ts
Asia/Macau
```

###### username

`string`

**Description**

Must not be greater than 255 characters.

**Example**

```ts
zuskpxhvdkxhnytwumiwzhnehokvxqrvqifveopjgfzjrmiriskpczuxlmajdotbnipbctcgnxqzrcwpmgdywkfmvhklmesbcvlqjwcnhhmlfnmnypcaohmomdfngoygyagnsbydmyradyhilvsypjztyovlielivlfdwnughxsklnxknyxwgtipjqobulrrdexsibcprbapnriekmgcjbcccbmdrnyemduvyalhmflehwbufxgzajreawcqxch
```

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:1281](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1281)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### generateSsoToken()

> **generateSsoToken**(`user`): `Promise`\<`string`\>

Defined in: [resources.ts:1350](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1350)

#### Parameters

##### user

`number`

#### Returns

`Promise`\<`string`\>

***

### get()

> **get**(`id`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: [resources.ts:1236](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1236)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### getAccessLog()

> **getAccessLog**(`userId`): `Promise`\<`any`[]\>

Defined in: [resources.ts:1314](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1314)

#### Parameters

##### userId

`number`

#### Returns

`Promise`\<`any`[]\>

***

### getCurrentUser()

> **getCurrentUser**(): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: [resources.ts:1290](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1290)

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### getLoginHistory()

> **getLoginHistory**(`userId`): `Promise`\<`any`[]\>

Defined in: [resources.ts:1303](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1303)

#### Parameters

##### userId

`number`

#### Returns

`Promise`\<`any`[]\>

***

### list()

> **list**(`options`): `Promise`\<[`User`](../interfaces/User.md)[]\>

Defined in: [resources.ts:1224](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1224)

#### Parameters

##### options

[`ListOptions`](../interfaces/ListOptions.md)\<[`UserFilters`](../interfaces/UserFilters.md)\> = `{}`

#### Returns

`Promise`\<[`User`](../interfaces/User.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L90)

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

### startImpersonation()

> **startImpersonation**(`impersonateUserId`): `Promise`\<`void`\>

Defined in: [resources.ts:1362](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1362)

#### Parameters

##### impersonateUserId

`number`

#### Returns

`Promise`\<`void`\>

***

### stopImpersonation()

> **stopImpersonation**(`impersonateUserId`): `Promise`\<`void`\>

Defined in: [resources.ts:1371](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1371)

#### Parameters

##### impersonateUserId

`number`

#### Returns

`Promise`\<`void`\>

***

### testLoginDetails()

> **testLoginDetails**(`data`): `Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

Defined in: [resources.ts:1325](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1325)

#### Parameters

##### data

`any`

#### Returns

`Promise`\<[`OperationResult`](../interfaces/OperationResult.md)\<`unknown`\>\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`User`](../interfaces/User.md)\>

Defined in: [resources.ts:1265](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L1265)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreateUserRequest`](../type-aliases/CreateUserRequest.md)\>

#### Returns

`Promise`\<[`User`](../interfaces/User.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L97)

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

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L106)

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

[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerBMCUsersResource

# Class: ServerBMCUsersResource

Defined in: [server-extensions.ts:141](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L141)

Server BMC (Baseboard Management Controller) User Management Resource

This resource provides comprehensive management of BMC users for a specific server.
BMC users are used for out-of-band management operations like power control,
console access, and hardware monitoring. This class allows you to create, update,
delete, and configure BMC users with appropriate privileges and access controls.

BMC user management is critical for server administration as it provides:
- Remote power management capabilities
- Console access for troubleshooting
- Hardware monitoring and alerting
- Secure out-of-band management

## Example

```typescript
const bmcUsers = client.servers.bmcUsers(123);

// List all BMC users
const users = await bmcUsers.listUsers();

// Create a new BMC user with specific privileges
const newUser = await bmcUsers.createUserWithPasswordAndPrivilege({
  username: 'admin-user',
  password: 'secure-password',
  privilege: 'administrator'
});

// Update user privileges
await bmcUsers.setUserPrivilege(newUser.id, 'operator');

// Enable/disable user
await bmcUsers.enableUser(newUser.id);
await bmcUsers.disableUser(newUser.id);
```

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new ServerBMCUsersResource**(`client`, `serverId`): `ServerBMCUsersResource`

Defined in: [server-extensions.ts:148](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L148)

Creates a new ServerBMCUsersResource instance

#### Parameters

##### client

`any`

The TenantOS client instance

##### serverId

`number`

The ID of the server to manage BMC users for

#### Returns

`ServerBMCUsersResource`

#### Overrides

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [server-extensions.ts:77](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L77)

#### Inherited from

`BaseResource.client`

## Methods

### channelSetAccess()

> **channelSetAccess**(`userId`, `data`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:322](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L322)

#### Parameters

##### userId

`number`

##### data

`any`

#### Returns

`Promise`\<`void`\>

***

### createUser()

> **createUser**(`data`): `Promise`\<[`BMCUser`](../interfaces/BMCUser.md)\>

Defined in: [server-extensions.ts:198](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L198)

Create a new BMC user

Creates a new BMC user with the provided configuration. Note that this
method creates a basic user - use createUserWithPasswordAndPrivilege()
for a more complete user setup.

#### Parameters

##### data

`Partial`\<[`BMCUser`](../interfaces/BMCUser.md)\>

Partial BMC user data

#### Returns

`Promise`\<[`BMCUser`](../interfaces/BMCUser.md)\>

Promise that resolves to the created BMC user

#### Throws

If the creation fails

#### Example

```typescript
const user = await bmcUsers.createUser({
  username: 'monitoring-user',
  enabled: true
});
```

***

### createUserWithPasswordAndPrivilege()

> **createUserWithPasswordAndPrivilege**(`data`): `Promise`\<[`BMCUser`](../interfaces/BMCUser.md)\>

Defined in: [server-extensions.ts:238](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L238)

Create a BMC user with password and privilege in one operation

This is the recommended method for creating BMC users as it sets up
the username, password, and privilege level in a single atomic operation.
This ensures the user is immediately usable for BMC operations.

#### Parameters

##### data

User creation data including username, password, and privilege

###### password

`string`

###### privilege

`string`

###### username

`string`

#### Returns

`Promise`\<[`BMCUser`](../interfaces/BMCUser.md)\>

Promise that resolves to the created BMC user

#### Throws

If the creation fails

#### Example

```typescript
const adminUser = await bmcUsers.createUserWithPasswordAndPrivilege({
  username: 'admin',
  password: 'secure-password-123',
  privilege: 'administrator'
});

const operatorUser = await bmcUsers.createUserWithPasswordAndPrivilege({
  username: 'operator',
  password: 'operator-password',
  privilege: 'operator'
});
```

***

### deleteUser()

> **deleteUser**(`userId`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:272](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L272)

#### Parameters

##### userId

`number`

#### Returns

`Promise`\<`void`\>

***

### disableUser()

> **disableUser**(`userId`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:292](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L292)

#### Parameters

##### userId

`number`

#### Returns

`Promise`\<`void`\>

***

### enableUser()

> **enableUser**(`userId`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:282](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L282)

#### Parameters

##### userId

`number`

#### Returns

`Promise`\<`void`\>

***

### listUsers()

> **listUsers**(): `Promise`\<[`BMCUser`](../interfaces/BMCUser.md)[]\>

Defined in: [server-extensions.ts:170](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L170)

List all BMC users for the server

Retrieves a list of all BMC users configured on the server's baseboard
management controller. This includes both active and inactive users.

#### Returns

`Promise`\<[`BMCUser`](../interfaces/BMCUser.md)[]\>

Promise that resolves to an array of BMC users

#### Throws

If the request fails

#### Example

```typescript
const users = await bmcUsers.listUsers();
console.log(`Found ${users.length} BMC users`);
users.forEach(user => {
  console.log(`${user.username}: ${user.privilege} (${user.enabled ? 'enabled' : 'disabled'})`);
});
```

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [server-extensions.ts:82](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L82)

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

### setUserPassword()

> **setUserPassword**(`userId`, `password`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:302](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L302)

#### Parameters

##### userId

`number`

##### password

`string`

#### Returns

`Promise`\<`void`\>

***

### setUserPrivilege()

> **setUserPrivilege**(`userId`, `privilege`): `Promise`\<`void`\>

Defined in: [server-extensions.ts:312](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L312)

#### Parameters

##### userId

`number`

##### privilege

`string`

#### Returns

`Promise`\<`void`\>

***

### updateUser()

> **updateUser**(`userId`, `data`): `Promise`\<[`BMCUser`](../interfaces/BMCUser.md)\>

Defined in: [server-extensions.ts:256](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L256)

#### Parameters

##### userId

`number`

##### data

`Partial`\<[`BMCUser`](../interfaces/BMCUser.md)\>

#### Returns

`Promise`\<[`BMCUser`](../interfaces/BMCUser.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [server-extensions.ts:89](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L89)

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

Defined in: [server-extensions.ts:98](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/server-extensions.ts#L98)

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

[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / TenantosConfigError

# Class: TenantosConfigError

Defined in: [errors.ts:257](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L257)

Thrown when client configuration is invalid

## Extends

- [`TenantosError`](TenantosError.md)

## Constructors

### Constructor

> **new TenantosConfigError**(`message`, `field?`, `options?`): `TenantosConfigError`

Defined in: [errors.ts:260](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L260)

#### Parameters

##### message

`string`

##### field?

`string`

##### options?

###### cause?

`Error`

#### Returns

`TenantosConfigError`

#### Overrides

[`TenantosError`](TenantosError.md).[`constructor`](TenantosError.md#constructor)

## Properties

### field?

> `readonly` `optional` **field**: `string`

Defined in: [errors.ts:260](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L260)

***

### name

> `readonly` **name**: `string` = `'TenantosConfigError'`

Defined in: [errors.ts:258](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L258)

#### Overrides

[`TenantosError`](TenantosError.md).[`name`](TenantosError.md#name)

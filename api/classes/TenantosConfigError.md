[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / TenantosConfigError

# Class: TenantosConfigError

Defined in: [errors.ts:257](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L257)

Thrown when client configuration is invalid

## Extends

- [`TenantosError`](TenantosError.md)

## Constructors

### Constructor

> **new TenantosConfigError**(`message`, `field?`, `options?`): `TenantosConfigError`

Defined in: [errors.ts:260](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L260)

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

Defined in: [errors.ts:260](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L260)

***

### name

> `readonly` **name**: `string` = `'TenantosConfigError'`

Defined in: [errors.ts:258](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L258)

#### Overrides

[`TenantosError`](TenantosError.md).[`name`](TenantosError.md#name)

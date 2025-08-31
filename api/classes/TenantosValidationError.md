[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / TenantosValidationError

# Class: TenantosValidationError

Defined in: [errors.ts:268](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L268)

Thrown when required parameters are missing or invalid

## Extends

- [`TenantosError`](TenantosError.md)

## Constructors

### Constructor

> **new TenantosValidationError**(`message`, `field?`, `value?`, `options?`): `TenantosValidationError`

Defined in: [errors.ts:271](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L271)

#### Parameters

##### message

`string`

##### field?

`string`

##### value?

`unknown`

##### options?

###### cause?

`Error`

#### Returns

`TenantosValidationError`

#### Overrides

[`TenantosError`](TenantosError.md).[`constructor`](TenantosError.md#constructor)

## Properties

### field?

> `readonly` `optional` **field**: `string`

Defined in: [errors.ts:273](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L273)

***

### name

> `readonly` **name**: `string` = `'TenantosValidationError'`

Defined in: [errors.ts:269](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L269)

#### Overrides

[`TenantosError`](TenantosError.md).[`name`](TenantosError.md#name)

***

### value?

> `readonly` `optional` **value**: `unknown`

Defined in: [errors.ts:274](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/errors.ts#L274)

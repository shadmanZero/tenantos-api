[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / TenantosConfigError

# Class: TenantosConfigError

Defined in: [errors.ts:257](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/errors.ts#L257)

Thrown when client configuration is invalid

## Extends

- [`TenantosError`](TenantosError.md)

## Constructors

### Constructor

> **new TenantosConfigError**(`message`, `field?`, `options?`): `TenantosConfigError`

Defined in: [errors.ts:260](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/errors.ts#L260)

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

Defined in: [errors.ts:260](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/errors.ts#L260)

***

### name

> `readonly` **name**: `string` = `'TenantosConfigError'`

Defined in: [errors.ts:258](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/errors.ts#L258)

#### Overrides

[`TenantosError`](TenantosError.md).[`name`](TenantosError.md#name)

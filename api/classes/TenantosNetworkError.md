[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / TenantosNetworkError

# Class: TenantosNetworkError

Defined in: [errors.ts:231](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L231)

Thrown when network request fails

## Extends

- [`TenantosError`](TenantosError.md)

## Extended by

- [`TenantosTimeoutError`](TenantosTimeoutError.md)

## Constructors

### Constructor

> **new TenantosNetworkError**(`message`, `cause?`, `options?`): `TenantosNetworkError`

Defined in: [errors.ts:234](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L234)

#### Parameters

##### message

`string`

##### cause?

`Error`

##### options?

###### cause?

`Error`

#### Returns

`TenantosNetworkError`

#### Overrides

[`TenantosError`](TenantosError.md).[`constructor`](TenantosError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [errors.ts:236](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L236)

***

### name

> `readonly` **name**: `string` = `'TenantosNetworkError'`

Defined in: [errors.ts:232](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L232)

#### Overrides

[`TenantosError`](TenantosError.md).[`name`](TenantosError.md#name)

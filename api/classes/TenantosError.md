[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / TenantosError

# Abstract Class: TenantosError

Defined in: [errors.ts:60](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L60)

Base class for all TenantOS API errors

This abstract class provides the foundation for all custom error types in the
TenantOS API client. It ensures proper error inheritance, stack trace preservation,
and consistent error handling across all error types.

Features:
- Proper prototype chain maintenance for instanceof checks
- Stack trace preservation (V8 engines)
- Error cause chaining support
- Abstract name property for type identification

## Extends

- `Error`

## Extended by

- [`TenantosApiError`](TenantosApiError.md)
- [`TenantosNetworkError`](TenantosNetworkError.md)
- [`TenantosConfigError`](TenantosConfigError.md)
- [`TenantosValidationError`](TenantosValidationError.md)

## Constructors

### Constructor

> **new TenantosError**(`message`, `opts?`): `TenantosError`

Defined in: [errors.ts:63](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L63)

#### Parameters

##### message

`string`

##### opts?

###### cause?

`Error`

#### Returns

`TenantosError`

#### Overrides

`Error.constructor`

## Properties

### name

> `abstract` `readonly` **name**: `string`

Defined in: [errors.ts:61](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/errors.ts#L61)

#### Overrides

`Error.name`

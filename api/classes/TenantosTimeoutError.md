[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / TenantosTimeoutError

# Class: TenantosTimeoutError

Defined in: [errors.ts:246](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/errors.ts#L246)

Thrown when request times out

## Extends

- [`TenantosNetworkError`](TenantosNetworkError.md)

## Constructors

### Constructor

> **new TenantosTimeoutError**(`timeout`, `options?`): `TenantosTimeoutError`

Defined in: [errors.ts:249](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/errors.ts#L249)

#### Parameters

##### timeout

`number`

##### options?

###### cause?

`Error`

#### Returns

`TenantosTimeoutError`

#### Overrides

[`TenantosNetworkError`](TenantosNetworkError.md).[`constructor`](TenantosNetworkError.md#constructor)

## Properties

### cause?

> `readonly` `optional` **cause**: `Error`

Defined in: [errors.ts:236](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/errors.ts#L236)

#### Inherited from

[`TenantosNetworkError`](TenantosNetworkError.md).[`cause`](TenantosNetworkError.md#cause)

***

### name

> `readonly` **name**: `string` = `'TenantosTimeoutError'`

Defined in: [errors.ts:247](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/errors.ts#L247)

#### Overrides

[`TenantosNetworkError`](TenantosNetworkError.md).[`name`](TenantosNetworkError.md#name)

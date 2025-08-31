[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / ApiResponse

# Interface: ApiResponse\<T\>

Defined in: [types.ts:136](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/types.ts#L136)

Standard API response wrapper

All TenantOS API responses follow this structure, providing consistent
error handling and result extraction across all endpoints.

## Type Parameters

### T

`T` = `unknown`

The type of the result data

## Properties

### message?

> `readonly` `optional` **message**: `string`

Defined in: [types.ts:140](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/types.ts#L140)

Optional message from the server

***

### result?

> `readonly` `optional` **result**: `T`

Defined in: [types.ts:138](https://github.com/shadmanZero/tenantos-api/blob/50bbdae310005a0ca12345f143ddaf8ea2b8ce90/src/types.ts#L138)

The actual response data (if successful)

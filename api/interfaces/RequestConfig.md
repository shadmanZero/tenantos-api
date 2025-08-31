[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / RequestConfig

# Interface: RequestConfig

Defined in: [types.ts:115](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/types.ts#L115)

Configuration for individual API requests

This interface defines the structure for making HTTP requests to the TenantOS API.
It's used internally by the client but can be useful for advanced use cases.

## Properties

### data?

> `readonly` `optional` **data**: `unknown`

Defined in: [types.ts:123](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/types.ts#L123)

Request body data (for POST/PUT requests)

***

### headers?

> `readonly` `optional` **headers**: `Readonly`\<`Record`\<`string`, `string`\>\>

Defined in: [types.ts:121](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/types.ts#L121)

Optional headers specific to this request

***

### method

> `readonly` **method**: [`HttpMethod`](../type-aliases/HttpMethod.md)

Defined in: [types.ts:117](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/types.ts#L117)

HTTP method for the request

***

### params?

> `readonly` `optional` **params**: `Readonly`\<`Record`\<`string`, `string` \| `number` \| `boolean`\>\>

Defined in: [types.ts:125](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/types.ts#L125)

Query parameters to append to the URL

***

### url

> `readonly` **url**: `string`

Defined in: [types.ts:119](https://github.com/shadmanZero/tenantos-api/blob/b1ba837cafbeb4e057ec12e90b81a7c5ea5b383f/src/types.ts#L119)

API endpoint URL (relative to base URL)

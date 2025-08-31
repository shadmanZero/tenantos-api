[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / TenantosClientConfig

# Interface: TenantosClientConfig

Defined in: [types.ts:58](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L58)

Configuration interface for TenantOS API client

This interface defines all the configuration options available when creating
a new TenantOS client instance. All properties are readonly to ensure
immutability after client creation.

## Example

```typescript
const config: TenantosClientConfig = {
  baseUrl: 'https://your-tenant.tenantos.com',
  apiKey: 'your-api-key-here',
  timeout: 30000,
  debug: true,
  retry: {
    attempts: 3,
    delay: 1000
  }
};
```

## Properties

### apiKey

> `readonly` **apiKey**: `string`

Defined in: [types.ts:69](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L69)

API authentication token - obtain this from your TenantOS dashboard

#### Example

```ts
'Bearer abc123...'
```

***

### baseUrl

> `readonly` **baseUrl**: `string`

Defined in: [types.ts:63](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L63)

Base URL of your TenantOS instance

#### Example

```ts
'https://your-tenant.tenantos.com'
```

***

### debug?

> `readonly` `optional` **debug**: `boolean`

Defined in: [types.ts:89](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L89)

Enable debug logging for requests and responses

#### Default

```ts
false
```

***

### headers?

> `readonly` `optional` **headers**: `Readonly`\<`Record`\<`string`, `string`\>\>

Defined in: [types.ts:83](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L83)

Custom headers to include with every request
Useful for adding custom authentication or tracking headers

***

### retry?

> `readonly` `optional` **retry**: `object`

Defined in: [types.ts:95](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L95)

Retry configuration for failed requests
Only retryable errors (network issues, 5xx responses) will be retried

#### attempts

> `readonly` **attempts**: `number`

Number of retry attempts (0-10)

#### delay

> `readonly` **delay**: `number`

Delay between retries in milliseconds (0-30000)

***

### timeout?

> `readonly` `optional` **timeout**: `number`

Defined in: [types.ts:77](https://github.com/shadmanZero/tenantos-api/blob/1c7b7035084787c8e7500a348d67d47efa9ca53a/src/types.ts#L77)

Request timeout in milliseconds

#### Default

```ts
30000
```

#### Minimum

1000

#### Maximum

300000

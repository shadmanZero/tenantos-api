[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / TenantosApiError

# Class: TenantosApiError

Defined in: [errors.ts:110](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L110)

Thrown when the API returns an error response (4xx or 5xx status codes)

This is the primary error class for HTTP-level API errors. It provides detailed
information about the failed request including status code, response data,
and request tracking information.

The class includes helper methods for classifying different types of API errors
and generating user-friendly error messages based on common HTTP status codes.

## Example

```typescript
try {
  await client.servers.get(999);
} catch (error) {
  if (error instanceof TenantosApiError) {
    console.log(`Status: ${error.statusCode}`);
    console.log(`Message: ${error.message}`);
    console.log(`Request ID: ${error.requestId}`);
    
    if (error.isNotFound()) {
      console.log('Resource not found');
    } else if (error.isServerError()) {
      console.log('Server-side error occurred');
    }
  }
}
```

## Extends

- [`TenantosError`](TenantosError.md)

## Extended by

- [`TenantosNotFoundError`](TenantosNotFoundError.md)
- [`TenantosAuthenticationError`](TenantosAuthenticationError.md)
- [`TenantosAuthorizationError`](TenantosAuthorizationError.md)
- [`TenantosRateLimitError`](TenantosRateLimitError.md)

## Constructors

### Constructor

> **new TenantosApiError**(`message`, `statusCode`, `response?`, `requestId?`, `options?`): `TenantosApiError`

Defined in: [errors.ts:122](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L122)

Creates a new TenantosApiError instance

#### Parameters

##### message

`string`

Error message from the API or a descriptive message

##### statusCode

`number`

HTTP status code from the response

##### response?

`unknown`

Raw response data from the API (optional)

##### requestId?

`string`

Unique request identifier for tracking (optional)

##### options?

Additional error options including cause chaining

###### cause?

`Error`

#### Returns

`TenantosApiError`

#### Overrides

[`TenantosError`](TenantosError.md).[`constructor`](TenantosError.md#constructor)

## Properties

### name

> `readonly` **name**: `string` = `'TenantosApiError'`

Defined in: [errors.ts:111](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L111)

#### Overrides

[`TenantosError`](TenantosError.md).[`name`](TenantosError.md#name)

***

### requestId?

> `readonly` `optional` **requestId**: `string`

Defined in: [errors.ts:126](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L126)

Unique request identifier for tracking (optional)

***

### response?

> `readonly` `optional` **response**: `unknown`

Defined in: [errors.ts:125](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L125)

Raw response data from the API (optional)

***

### statusCode

> `readonly` **statusCode**: `number`

Defined in: [errors.ts:124](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L124)

HTTP status code from the response

## Methods

### getUserMessage()

> **getUserMessage**(): `string`

Defined in: [errors.ts:208](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L208)

Get a user-friendly error message based on the HTTP status code

This method provides human-readable error messages for common HTTP status
codes, making it easier to display meaningful error information to users.

#### Returns

`string`

A user-friendly error message string

#### Example

```typescript
try {
  await client.servers.get(999);
} catch (error) {
  if (error instanceof TenantosApiError) {
    alert(error.getUserMessage()); // Shows user-friendly message
  }
}
```

***

### isClientError()

> **isClientError**(): `boolean`

Defined in: [errors.ts:166](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L166)

Check if this is a client error (4xx status codes)

Client errors indicate issues with the request such as invalid parameters,
authentication failures, or requesting non-existent resources.

#### Returns

`boolean`

True if the status code is in the 4xx range

#### Example

```typescript
if (error.isClientError()) {
  console.log('Request error - check your parameters');
}
```

***

### isServerError()

> **isServerError**(): `boolean`

Defined in: [errors.ts:185](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L185)

Check if this is a server error (5xx status codes)

Server errors indicate issues on the TenantOS server side and are typically
temporary. These errors may be retryable depending on the specific status code.

#### Returns

`boolean`

True if the status code is in the 5xx range

#### Example

```typescript
if (error.isServerError()) {
  console.log('Server error - may be temporary, consider retrying');
}
```

***

### isStatus()

> **isStatus**(`code`): `boolean`

Defined in: [errors.ts:147](https://github.com/shadmanZero/tenantos-api/blob/1519ecac4035082956b06ca1cf266b8ad4cc7904/src/errors.ts#L147)

Check if this error has a specific HTTP status code

#### Parameters

##### code

`number`

The HTTP status code to check for

#### Returns

`boolean`

True if the error status matches the provided code

#### Example

```typescript
if (error.isStatus(404)) {
  console.log('Resource not found');
} else if (error.isStatus(429)) {
  console.log('Rate limit exceeded');
}
```

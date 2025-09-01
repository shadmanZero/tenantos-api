[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / TenantosAuthorizationError

# Class: TenantosAuthorizationError

Defined in: [errors.ts:306](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L306)

Thrown when user doesn't have permission for an operation

## Extends

- [`TenantosApiError`](TenantosApiError.md)

## Constructors

### Constructor

> **new TenantosAuthorizationError**(`message`, `options?`): `TenantosAuthorizationError`

Defined in: [errors.ts:309](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L309)

#### Parameters

##### message

`string` = `'Insufficient permissions'`

##### options?

###### cause?

`Error`

#### Returns

`TenantosAuthorizationError`

#### Overrides

[`TenantosApiError`](TenantosApiError.md).[`constructor`](TenantosApiError.md#constructor)

## Properties

### name

> `readonly` **name**: `string` = `'TenantosAuthorizationError'`

Defined in: [errors.ts:307](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L307)

#### Overrides

[`TenantosApiError`](TenantosApiError.md).[`name`](TenantosApiError.md#name)

***

### requestId?

> `readonly` `optional` **requestId**: `string`

Defined in: [errors.ts:126](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L126)

Unique request identifier for tracking (optional)

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`requestId`](TenantosApiError.md#requestid)

***

### response?

> `readonly` `optional` **response**: `unknown`

Defined in: [errors.ts:125](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L125)

Raw response data from the API (optional)

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`response`](TenantosApiError.md#response)

***

### statusCode

> `readonly` **statusCode**: `number`

Defined in: [errors.ts:124](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L124)

HTTP status code from the response

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`statusCode`](TenantosApiError.md#statuscode)

## Methods

### getUserMessage()

> **getUserMessage**(): `string`

Defined in: [errors.ts:208](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L208)

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

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`getUserMessage`](TenantosApiError.md#getusermessage)

***

### isClientError()

> **isClientError**(): `boolean`

Defined in: [errors.ts:166](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L166)

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

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`isClientError`](TenantosApiError.md#isclienterror)

***

### isServerError()

> **isServerError**(): `boolean`

Defined in: [errors.ts:185](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L185)

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

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`isServerError`](TenantosApiError.md#isservererror)

***

### isStatus()

> **isStatus**(`code`): `boolean`

Defined in: [errors.ts:147](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/errors.ts#L147)

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

#### Inherited from

[`TenantosApiError`](TenantosApiError.md).[`isStatus`](TenantosApiError.md#isstatus)

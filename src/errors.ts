/**
 * @fileoverview TenantOS API Error Classes
 * 
 * This file defines a comprehensive hierarchy of error classes for the TenantOS API client.
 * The error system provides detailed information about different types of failures that can
 * occur when interacting with the TenantOS API, enabling proper error handling and debugging.
 * 
 * Error Hierarchy:
 * - TenantosError (abstract base class)
 *   - TenantosApiError (HTTP API errors)
 *     - TenantosNotFoundError (404 errors)
 *     - TenantosAuthenticationError (401 errors)
 *     - TenantosAuthorizationError (403 errors)
 *     - TenantosRateLimitError (429 errors)
 *   - TenantosNetworkError (network connectivity issues)
 *     - TenantosTimeoutError (request timeouts)
 *   - TenantosConfigError (configuration validation errors)
 *   - TenantosValidationError (input validation errors)
 * 
 * Each error class provides specific information about the failure type and includes
 * helper methods for error classification and user-friendly error messages.
 * 
 * @example Error Handling
 * ```typescript
 * try {
 *   const server = await client.servers.get(999);
 * } catch (error) {
 *   if (isTenantosApiError(error)) {
 *     if (error.isNotFound()) {
 *       console.log('Server not found');
 *     } else if (error.isServerError()) {
 *       console.log('Server error occurred');
 *     }
 *     console.log(`Status: ${error.statusCode}, Message: ${error.message}`);
 *   } else if (isTenantosNetworkError(error)) {
 *     console.log('Network connectivity issue');
 *   }
 * }
 * ```
 * 
 * @version 1.0.0
 * @author Salim Shadman
 * @license MIT
 * @description TypeScript wrapper for TenantOS API - created by Salim Shadman under MIT License
 */

/**
 * Base class for all TenantOS API errors
 * 
 * This abstract class provides the foundation for all custom error types in the
 * TenantOS API client. It ensures proper error inheritance, stack trace preservation,
 * and consistent error handling across all error types.
 * 
 * Features:
 * - Proper prototype chain maintenance for instanceof checks
 * - Stack trace preservation (V8 engines)
 * - Error cause chaining support
 * - Abstract name property for type identification
 */
export abstract class TenantosError extends Error {
  abstract override readonly name: string;
  
  constructor(message: string, opts?: { cause?: Error }) {
    super(message);
    
    // Attach cause if provided
    if (opts?.cause) {
      (this as Error & { cause?: Error }).cause = opts.cause;
    }
    
    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    
    // Set the prototype explicitly to maintain instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Thrown when the API returns an error response (4xx or 5xx status codes)
 * 
 * This is the primary error class for HTTP-level API errors. It provides detailed
 * information about the failed request including status code, response data,
 * and request tracking information.
 * 
 * The class includes helper methods for classifying different types of API errors
 * and generating user-friendly error messages based on common HTTP status codes.
 * 
 * @example
 * ```typescript
 * try {
 *   await client.servers.get(999);
 * } catch (error) {
 *   if (error instanceof TenantosApiError) {
 *     console.log(`Status: ${error.statusCode}`);
 *     console.log(`Message: ${error.message}`);
 *     console.log(`Request ID: ${error.requestId}`);
 *     
 *     if (error.isNotFound()) {
 *       console.log('Resource not found');
 *     } else if (error.isServerError()) {
 *       console.log('Server-side error occurred');
 *     }
 *   }
 * }
 * ```
 */
export class TenantosApiError extends TenantosError {
  override readonly name: string = 'TenantosApiError';
  
  /**
   * Creates a new TenantosApiError instance
   * 
   * @param message - Error message from the API or a descriptive message
   * @param statusCode - HTTP status code from the response
   * @param response - Raw response data from the API (optional)
   * @param requestId - Unique request identifier for tracking (optional)
   * @param options - Additional error options including cause chaining
   */
  constructor(
    message: string,
    public readonly statusCode: number,
    public readonly response?: unknown,
    public readonly requestId?: string,
    options?: { cause?: Error }
  ) {
    super(`API Error ${statusCode}: ${message}`, options);
  }
  
  /**
   * Check if this error has a specific HTTP status code
   * 
   * @param code - The HTTP status code to check for
   * @returns True if the error status matches the provided code
   * 
   * @example
   * ```typescript
   * if (error.isStatus(404)) {
   *   console.log('Resource not found');
   * } else if (error.isStatus(429)) {
   *   console.log('Rate limit exceeded');
   * }
   * ```
   */
  isStatus(code: number): boolean {
    return this.statusCode === code;
  }
  
  /**
   * Check if this is a client error (4xx status codes)
   * 
   * Client errors indicate issues with the request such as invalid parameters,
   * authentication failures, or requesting non-existent resources.
   * 
   * @returns True if the status code is in the 4xx range
   * 
   * @example
   * ```typescript
   * if (error.isClientError()) {
   *   console.log('Request error - check your parameters');
   * }
   * ```
   */
  isClientError(): boolean {
    return this.statusCode >= 400 && this.statusCode < 500;
  }
  
  /**
   * Check if this is a server error (5xx status codes)
   * 
   * Server errors indicate issues on the TenantOS server side and are typically
   * temporary. These errors may be retryable depending on the specific status code.
   * 
   * @returns True if the status code is in the 5xx range
   * 
   * @example
   * ```typescript
   * if (error.isServerError()) {
   *   console.log('Server error - may be temporary, consider retrying');
   * }
   * ```
   */
  isServerError(): boolean {
    return this.statusCode >= 500 && this.statusCode < 600;
  }
  
  /**
   * Get a user-friendly error message based on the HTTP status code
   * 
   * This method provides human-readable error messages for common HTTP status
   * codes, making it easier to display meaningful error information to users.
   * 
   * @returns A user-friendly error message string
   * 
   * @example
   * ```typescript
   * try {
   *   await client.servers.get(999);
   * } catch (error) {
   *   if (error instanceof TenantosApiError) {
   *     alert(error.getUserMessage()); // Shows user-friendly message
   *   }
   * }
   * ```
   */
  getUserMessage(): string {
    switch (this.statusCode) {
      case 400:
        return 'Invalid request. Please check your input and try again.';
      case 401:
        return 'Authentication failed. Please check your API key.';
      case 403:
        return 'You do not have permission to perform this action.';
      case 404:
        return 'The requested resource was not found.';
      case 429:
        return 'Too many requests. Please wait before trying again.';
      case 500:
        return 'Internal server error. Please try again later.';
      default:
        return this.message;
    }
  }
}

/**
 * Thrown when network request fails
 */
export class TenantosNetworkError extends TenantosError {
  override readonly name: string = 'TenantosNetworkError';
  
  constructor(
    message: string,
    public readonly cause?: Error,
    options?: { cause?: Error }
  ) {
    super(`Network Error: ${message}`, options);
  }
}

/**
 * Thrown when request times out
 */
export class TenantosTimeoutError extends TenantosNetworkError {
  override readonly name: string = 'TenantosTimeoutError';
  
  constructor(timeout: number, options?: { cause?: Error }) {
    super(`Request timed out after ${timeout}ms`, undefined, options);
  }
}

/**
 * Thrown when client configuration is invalid
 */
export class TenantosConfigError extends TenantosError {
  override readonly name: string = 'TenantosConfigError';
  
  constructor(message: string, public readonly field?: string, options?: { cause?: Error }) {
    super(`Configuration Error: ${message}`, options);
  }
}

/**
 * Thrown when required parameters are missing or invalid
 */
export class TenantosValidationError extends TenantosError {
  override readonly name: string = 'TenantosValidationError';
  
  constructor(
    message: string,
    public readonly field?: string,
    public readonly value?: unknown,
    options?: { cause?: Error }
  ) {
    super(`Validation Error: ${message}`, options);
  }
}

/**
 * Thrown when trying to access a resource that doesn't exist
 */
export class TenantosNotFoundError extends TenantosApiError {
  override readonly name: string = 'TenantosNotFoundError';
  
  constructor(resource: string, id: string | number, options?: { cause?: Error }) {
    super(`${resource} with ID ${id} not found`, 404, undefined, undefined, options);
  }
}

/**
 * Thrown when authentication fails
 */
export class TenantosAuthenticationError extends TenantosApiError {
  override readonly name: string = 'TenantosAuthenticationError';
  
  constructor(message = 'Authentication failed', options?: { cause?: Error }) {
    super(message, 401, undefined, undefined, options);
  }
}

/**
 * Thrown when user doesn't have permission for an operation
 */
export class TenantosAuthorizationError extends TenantosApiError {
  override readonly name: string = 'TenantosAuthorizationError';
  
  constructor(message = 'Insufficient permissions', options?: { cause?: Error }) {
    super(message, 403, undefined, undefined, options);
  }
}

/**
 * Thrown when rate limit is exceeded
 */
export class TenantosRateLimitError extends TenantosApiError {
  override readonly name: string = 'TenantosRateLimitError';
  
  constructor(
    public readonly retryAfter?: number,
    options?: { cause?: Error }
  ) {
    const message = retryAfter 
      ? `Rate limit exceeded. Retry after ${retryAfter} seconds.`
      : 'Rate limit exceeded';
    super(message, 429, undefined, undefined, options);
  }
}

/**
 * Type guard to check if an error is a TenantOS error
 */
export function isTenantosError(error: unknown): error is TenantosError {
  return error instanceof TenantosError;
}

/**
 * Type guard to check if an error is a TenantOS API error
 */
export function isTenantosApiError(error: unknown): error is TenantosApiError {
  return error instanceof TenantosApiError;
}

/**
 * Type guard to check if an error is a network error
 */
export function isTenantosNetworkError(error: unknown): error is TenantosNetworkError {
  return error instanceof TenantosNetworkError;
}

/**
 * Type guard to check if an error is a validation error
 */
export function isTenantosValidationError(error: unknown): error is TenantosValidationError {
  return error instanceof TenantosValidationError;
}

/**
 * Type guard to check if an error is a configuration error
 */
export function isTenantosConfigError(error: unknown): error is TenantosConfigError {
  return error instanceof TenantosConfigError;
}

/**
 * Helper to create appropriate error from HTTP response
 */
export function createErrorFromResponse(
  statusCode: number,
  message: string,
  response?: unknown,
  requestId?: string
): TenantosApiError {
  switch (statusCode) {
    case 401:
      return new TenantosAuthenticationError(message);
    case 403:
      return new TenantosAuthorizationError(message);
    case 404:
      return new TenantosApiError(message, statusCode, response, requestId);
    case 429: {
      // Extract retry-after if available
      const hasRetryAfter = (r: unknown): r is { retryAfter?: string | number } =>
        typeof r === 'object' && r !== null && 'retryAfter' in r;
      const retryAfter = hasRetryAfter(response)
        ? Number(response.retryAfter)
        : undefined;
      return new TenantosRateLimitError(retryAfter);
    }
    default:
      return new TenantosApiError(message, statusCode, response, requestId);
  }
}

/**
 * Utility function to safely extract error message from unknown error
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unknown error occurred';
}

/**
 * Utility function to check if an error is retryable
 */
export function isRetryableError(error: unknown): boolean {
  if (isTenantosApiError(error)) {
    // Retry on server errors and rate limits
    return error.isServerError() || error.isStatus(429);
  }
  if (isTenantosNetworkError(error)) {
    // Retry on network errors but not timeouts
    return !(error instanceof TenantosTimeoutError);
  }
  return false;
}

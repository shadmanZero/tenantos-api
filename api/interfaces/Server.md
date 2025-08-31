[**tenantos-api**](../README.md)

***

[tenantos-api](../globals.md) / Server

# Interface: Server

Defined in: [types.ts:540](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L540)

Server resource interface

Represents a physical or virtual server managed by TenantOS.
This is one of the core resources in the system and contains
comprehensive information about server configuration, hardware,
and operational status.

## Example

```typescript
const server: Server = {
  id: 123,
  hostname: 'web-server-01',
  servername: 'Web Server 01',
  user_id: 1,
  os: 'Ubuntu 22.04',
  servertype: 'dedicated',
  primaryip: '192.168.1.100',
  owner_realname: 'John Doe',
  tags: ['web', 'production'],
  description: 'Main web server for production environment'
};
```

## Properties

### consoleprovider?

> `readonly` `optional` **consoleprovider**: `object`

Defined in: [types.ts:583](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L583)

Console access provider configuration

#### type

> `readonly` **type**: `string`

Type of console provider

***

### description

> `readonly` **description**: `string`

Defined in: [types.ts:569](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L569)

Server description or notes

***

### detailedHardwareInformation?

> `readonly` `optional` **detailedHardwareInformation**: [`DetailedHardwareInformation`](DetailedHardwareInformation.md)

Defined in: [types.ts:572](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L572)

Detailed hardware information (if available)

***

### diskwipeRunning?

> `readonly` `optional` **diskwipeRunning**: `number`

Defined in: [types.ts:592](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L592)

Flag indicating if disk wipe operation is currently running

***

### hardwarecollectRunning?

> `readonly` `optional` **hardwarecollectRunning**: `number`

Defined in: [types.ts:598](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L598)

Flag indicating if hardware collection is currently running

***

### hostname

> `readonly` **hostname**: `string`

Defined in: [types.ts:545](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L545)

Server hostname (FQDN)

***

### id

> `readonly` **id**: `number`

Defined in: [types.ts:542](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L542)

Unique identifier for the server

***

### os

> `readonly` **os**: `string`

Defined in: [types.ts:554](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L554)

Operating system installed on the server

***

### owner\_realname

> `readonly` **owner\_realname**: `string`

Defined in: [types.ts:563](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L563)

Real name of the server owner

***

### passwordResetRunning?

> `readonly` `optional` **passwordResetRunning**: `number`

Defined in: [types.ts:601](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L601)

Flag indicating if password reset operation is currently running

***

### powerprovider?

> `readonly` `optional` **powerprovider**: `object`

Defined in: [types.ts:575](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L575)

Power management provider configuration

#### supportedFeatures

> `readonly` **supportedFeatures**: readonly `string`[]

List of supported power management features

#### type

> `readonly` **type**: `string`

Type of power provider (e.g., 'ipmi', 'redfish')

***

### primaryip

> `readonly` **primaryip**: `string`

Defined in: [types.ts:560](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L560)

Primary IP address of the server

***

### reinstallationRunning?

> `readonly` `optional` **reinstallationRunning**: `number`

Defined in: [types.ts:589](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L589)

Flag indicating if OS reinstallation is currently running (1 = yes, 0 = no)

***

### rescueBootRunning?

> `readonly` `optional` **rescueBootRunning**: `number`

Defined in: [types.ts:595](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L595)

Flag indicating if rescue boot is currently active

***

### servername

> `readonly` **servername**: `string`

Defined in: [types.ts:548](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L548)

Human-readable server name

***

### servertype

> `readonly` **servertype**: `string`

Defined in: [types.ts:557](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L557)

Type of server (e.g., 'dedicated', 'virtual', 'cloud')

***

### tags

> `readonly` **tags**: readonly `string`[]

Defined in: [types.ts:566](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L566)

Array of tags for categorization and filtering

***

### user\_id

> `readonly` **user\_id**: `number`

Defined in: [types.ts:551](https://github.com/shadmanZero/tenantos-api/blob/5456fdea44f46a63455944d4982f5327cbeb3156/src/types.ts#L551)

ID of the user who owns this server

[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / Server

# Interface: Server

Defined in: [types.ts:562](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L562)

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

Defined in: [types.ts:605](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L605)

Console access provider configuration

#### type

> `readonly` **type**: `string`

Type of console provider

***

### description

> `readonly` **description**: `string`

Defined in: [types.ts:591](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L591)

Server description or notes

***

### detailedHardwareInformation?

> `readonly` `optional` **detailedHardwareInformation**: [`DetailedHardwareInformation`](DetailedHardwareInformation.md)

Defined in: [types.ts:594](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L594)

Detailed hardware information (if available)

***

### diskwipeRunning?

> `readonly` `optional` **diskwipeRunning**: `number`

Defined in: [types.ts:614](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L614)

Flag indicating if disk wipe operation is currently running

***

### hardwarecollectRunning?

> `readonly` `optional` **hardwarecollectRunning**: `number`

Defined in: [types.ts:620](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L620)

Flag indicating if hardware collection is currently running

***

### hostname

> `readonly` **hostname**: `string`

Defined in: [types.ts:567](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L567)

Server hostname (FQDN)

***

### id

> `readonly` **id**: `number`

Defined in: [types.ts:564](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L564)

Unique identifier for the server

***

### ipassignments?

> `readonly` `optional` **ipassignments**: readonly [`ServerIPAssignment`](ServerIPAssignment.md)[]

Defined in: [types.ts:629](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L629)

IP assignments for this server

***

### os

> `readonly` **os**: `string`

Defined in: [types.ts:576](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L576)

Operating system installed on the server

***

### owner\_realname

> `readonly` **owner\_realname**: `string`

Defined in: [types.ts:585](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L585)

Real name of the server owner

***

### passwordResetRunning?

> `readonly` `optional` **passwordResetRunning**: `number`

Defined in: [types.ts:623](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L623)

Flag indicating if password reset operation is currently running

***

### powerprovider?

> `readonly` `optional` **powerprovider**: `object`

Defined in: [types.ts:597](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L597)

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

Defined in: [types.ts:582](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L582)

Primary IP address of the server

***

### reinstallationRunning?

> `readonly` `optional` **reinstallationRunning**: `number`

Defined in: [types.ts:611](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L611)

Flag indicating if OS reinstallation is currently running (1 = yes, 0 = no)

***

### rescueBootRunning?

> `readonly` `optional` **rescueBootRunning**: `number`

Defined in: [types.ts:617](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L617)

Flag indicating if rescue boot is currently active

***

### result?

> `readonly` `optional` **result**: `unknown`

Defined in: [types.ts:626](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L626)

Operation result data

***

### servername

> `readonly` **servername**: `string`

Defined in: [types.ts:570](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L570)

Human-readable server name

***

### servertype

> `readonly` **servertype**: `string`

Defined in: [types.ts:579](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L579)

Type of server (e.g., 'dedicated', 'virtual', 'cloud')

***

### tags

> `readonly` **tags**: readonly `string`[]

Defined in: [types.ts:588](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L588)

Array of tags for categorization and filtering

***

### user\_id

> `readonly` **user\_id**: `number`

Defined in: [types.ts:573](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L573)

ID of the user who owns this server

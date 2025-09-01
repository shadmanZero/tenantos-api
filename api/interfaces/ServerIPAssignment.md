[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / ServerIPAssignment

# Interface: ServerIPAssignment

Defined in: [types.ts:487](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L487)

## Properties

### id?

> `readonly` `optional` **id**: `number`

Defined in: [types.ts:488](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L488)

***

### ip

> `readonly` **ip**: `string`

Defined in: [types.ts:489](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L489)

***

### ipAttributes?

> `readonly` `optional` **ipAttributes**: `object`

Defined in: [types.ts:495](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L495)

#### isIpv4

> `readonly` **isIpv4**: `number`

#### isIpv6

> `readonly` **isIpv6**: `number`

#### isSubnet

> `readonly` **isSubnet**: `number`

***

### primary\_ip?

> `readonly` `optional` **primary\_ip**: `number`

Defined in: [types.ts:494](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L494)

***

### rdnsHostname?

> `readonly` `optional` **rdnsHostname**: `string`

Defined in: [types.ts:492](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L492)

***

### subnet?

> `readonly` `optional` **subnet**: `string`

Defined in: [types.ts:490](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L490)

***

### subnetinformation?

> `readonly` `optional` **subnetinformation**: `object`

Defined in: [types.ts:500](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L500)

#### cidr?

> `readonly` `optional` **cidr**: `number`

#### gw

> `readonly` **gw**: `string`

#### isExternalProvider?

> `readonly` `optional` **isExternalProvider**: `number`

#### netmask

> `readonly` **netmask**: `string`

#### rdnsAvailable?

> `readonly` `optional` **rdnsAvailable**: `number`

#### rootSubnetId?

> `readonly` `optional` **rootSubnetId**: `null` \| `number`

#### subnet

> `readonly` **subnet**: `string`

#### subnetOwnedByUser?

> `readonly` `optional` **subnetOwnedByUser**: `boolean`

#### type

> `readonly` **type**: `string`

#### vlanAutomationAvailable?

> `readonly` `optional` **vlanAutomationAvailable**: `boolean`

***

### type?

> `readonly` `optional` **type**: `"primary"` \| `"secondary"`

Defined in: [types.ts:491](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L491)

***

### updated\_at?

> `readonly` `optional` **updated\_at**: `string`

Defined in: [types.ts:493](https://github.com/shadmanZero/tenantos-api/blob/a3061c31c45f4aa1cfaa0e889df3cea522a254ad/src/types.ts#L493)

[**@shadmanZero/tenantos-api**](../README.md)

***

[@shadmanZero/tenantos-api](../globals.md) / PXEProfilesResource

# Class: PXEProfilesResource

Defined in: [resources.ts:116](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L116)

PXE Profiles management resource

## Extends

- `BaseResource`

## Constructors

### Constructor

> **new PXEProfilesResource**(`client`): `PXEProfilesResource`

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L85)

#### Parameters

##### client

[`TenantosClient`](TenantosClient.md)

#### Returns

`PXEProfilesResource`

#### Inherited from

`BaseResource.constructor`

## Properties

### client

> `protected` `readonly` **client**: [`TenantosClient`](TenantosClient.md)

Defined in: [resources.ts:85](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L85)

#### Inherited from

`BaseResource.client`

## Methods

### clearCache()

> **clearCache**(`pxeProfileId`): `Promise`\<`void`\>

Defined in: [resources.ts:198](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L198)

#### Parameters

##### pxeProfileId

`number`

#### Returns

`Promise`\<`void`\>

***

### create()

> **create**(`data`): `Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

Defined in: [resources.ts:144](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L144)

#### Parameters

##### data

###### additionalDriversUrl?

`string`

**Description**

Must be a valid URL.

**Example**

```ts
https://domain.com/drivers
```

###### allow_for_dedicated?

`boolean`

**Example**

```ts
false
```

###### allow_for_vps?

`boolean`

**Example**

```ts
true
```

###### allow_set_hostname?

`boolean`

**Example**

```ts
true
```

###### allow_ssh_keys?

`boolean`

**Example**

```ts
true
```

###### autoInstallTemplate?

`string`

**Description**

The answer file for the OS installer.

**Example**

```ts
network --bootproto=static
```

###### cacheDirectory

`string`

**Description**

The OS files will be stored in this directory.

**Example**

```ts
centos8
```

###### configure_all_ipvfour_ask_user?

`boolean`

**Example**

```ts
false
```

###### configure_all_ipvfour_enforce?

`boolean`

**Example**

```ts
true
```

###### configure_all_ipvsix_ask_user?

`boolean`

**Example**

```ts
true
```

###### configure_all_ipvsix_enforce?

`boolean`

**Example**

```ts
false
```

###### configure_ipvfour_even_if_outside_of_gateway?

`boolean`

**Example**

```ts
true
```

###### customFirstBoot?

`string`

**Description**

Script will be executed on first operating system boot.

**Example**

```ts
touch /root/123
```

###### customPostScript?

`string`

**Description**

Script will be executed on after the installation has been completed, but within the installer environment.

**Example**

```ts
touch /root/123
```

###### default_disklayout_template?

`number`

**Example**

```ts
4
```

###### default_run_scripts?

`string`[]

**Example**

```ts
[
      "nulla"
    ]
```

###### default_run_scripts_hide_others?

`boolean`

**Example**

```ts
false
```

###### defaultDiskLayout?

`string`

**Description**

optional The disk layout configuration.

**Example**

```ts
autopart --type=lvm
```

###### dont_offer_if_has_tag?

`string`[]

**Example**

```ts
[
      "ex"
    ]
```

###### dont_offer_if_user_has_role?

`string`[]

**Example**

```ts
[
      null
    ]
```

###### enforced_default_disklayout_template?

`boolean`

**Example**

```ts
false
```

###### enforced_default_run_scripts?

`boolean`

**Example**

```ts
true
```

###### fallback_to_default_disklayout_if_unset?

`boolean`

**Example**

```ts
false
```

###### httpdirectory?

`string`

**Example**

```ts
vel
```

###### ipxe_bios_file?

`string`

**Example**

```ts
facere
```

###### ipxe_efi_file?

`string`

**Example**

```ts
atque
```

###### isDisabled?

`boolean`

**Example**

```ts
true
```

###### keep_dhcp_minutes?

`number`

**Description**

Must be at least 1. Must not be greater than 6000.

**Example**

```ts
4340
```

###### language?

`string`

**Example**

```ts
sequi
```

###### licensekey?

`string`

**Example**

```ts
voluptatem
```

###### mark_installation_completed_event?

`string`

**Description**

Must be one of <code>afterBaseInstall</code>, <code>firstBootBeforeScriptExecution</code>, <code>firstBootAfterScriptExecution</code>, or <code>onFirstPxeFileAccess</code>.

**Example**

```ts
firstBootAfterScriptExecution
```

###### mirrorUrl?

`string`

**Description**

The URL to the OS mirror.

**Example**

```ts
http://mirror.fra10.de.leaseweb.net/centos/8-stream/BaseOS/x86_64/os
```

###### networkConfigMode?

`string`

**Description**

Must be a valid network mode.

**Example**

```ts
default
```

###### offer_if_has_tag?

`string`[]

**Example**

```ts
[
      "aut"
    ]
```

###### offer_if_user_has_role?

`string`[]

**Example**

```ts
[
      null
    ]
```

###### osName

`string`

**Example**

```ts
nobis
```

###### packages?

`string`

**Description**

A list of packages which should be installed.

**Example**

```ts
kexec-tools
```

###### pxe_enable_comboot?

`boolean`

**Example**

```ts
true
```

###### pxe_file_caching_policy?

`string`

**Description**

Must be one of <code>smartCaching</code>, <code>dailyCleanup</code>, <code>clearBeforeInstallation</code>, or <code>keepAsLongAsPossible</code>.

**Example**

```ts
keepAsLongAsPossible
```

###### pxeConfig

`string`

**Description**

The iPXE boot configuration.

**Example**

```ts
#!ipxe
```

###### pxeType

`string`

**Description**

Must be one of `preseed,kickstart,autoinstall,windows,grml,vmware`.

**Example**

```ts
kickstart
```

###### set_root_password?

`boolean`

**Example**

```ts
true
```

###### tags

`string`[]

**Example**

```ts
[
      "kickstart "
    ]
```

###### timezone?

`string`

**Example**

```ts
sed
```

###### updateServerHardwareInventory?

`boolean`

**Example**

```ts
false
```

###### version?

`string`

**Description**

The version of the operating system. Only required for Ubuntu / Windows.

**Example**

```ts
voluptate
```

###### windows_activation_key?

`string`

**Example**

```ts
ipsam
```

###### windows_bypass_system_requirements_check?

`boolean`

**Example**

```ts
true
```

###### windows_key_location_specialize?

`boolean`

**Example**

```ts
false
```

###### windows_key_location_userdata?

`boolean`

**Example**

```ts
false
```

###### windows_skip_oobe?

`boolean`

**Example**

```ts
true
```

###### windows_use_empty_activation_key?

`boolean`

**Example**

```ts
false
```

#### Returns

`Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

Defined in: [resources.ts:174](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L174)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<`void`\>

***

### duplicate()

> **duplicate**(`pxeProfileId`): `Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

Defined in: [resources.ts:183](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L183)

#### Parameters

##### pxeProfileId

`number`

#### Returns

`Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

***

### get()

> **get**(`id`): `Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

Defined in: [resources.ts:129](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L129)

#### Parameters

##### id

`number`

#### Returns

`Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

***

### getProfilesByTags()

> **getProfilesByTags**(`tags`): `Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)[]\>

Defined in: [resources.ts:225](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L225)

#### Parameters

##### tags

`string`[]

#### Returns

`Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)[]\>

***

### getTags()

> **getTags**(): `Promise`\<`string`[]\>

Defined in: [resources.ts:216](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L216)

#### Returns

`Promise`\<`string`[]\>

***

### list()

> **list**(`options`): `Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)[]\>

Defined in: [resources.ts:117](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L117)

#### Parameters

##### options

[`ListOptions`](../interfaces/ListOptions.md)\<[`PXEProfileFilters`](../interfaces/PXEProfileFilters.md)\> = `{}`

#### Returns

`Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)[]\>

***

### request()

> `protected` **request**\<`T`\>(`config`): `Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

Defined in: [resources.ts:90](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L90)

Make a request to the API with automatic error handling

#### Type Parameters

##### T

`T`

#### Parameters

##### config

[`RequestConfig`](../interfaces/RequestConfig.md)

#### Returns

`Promise`\<[`ApiResponse`](../interfaces/ApiResponse.md)\<`T`\>\>

#### Inherited from

`BaseResource.request`

***

### restore()

> **restore**(`pxeProfileId`): `Promise`\<`void`\>

Defined in: [resources.ts:207](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L207)

#### Parameters

##### pxeProfileId

`number`

#### Returns

`Promise`\<`void`\>

***

### update()

> **update**(`id`, `data`): `Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

Defined in: [resources.ts:158](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L158)

#### Parameters

##### id

`number`

##### data

`Partial`\<[`CreatePXEProfileRequest`](../type-aliases/CreatePXEProfileRequest.md)\>

#### Returns

`Promise`\<[`PXEProfile`](../interfaces/PXEProfile.md)\>

***

### validateId()

> `protected` **validateId**(`id`, `resourceName`): `void`

Defined in: [resources.ts:97](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L97)

Validate that an ID is a positive integer

#### Parameters

##### id

`number`

##### resourceName

`string` = `'Resource'`

#### Returns

`void`

#### Inherited from

`BaseResource.validateId`

***

### validateRequiredString()

> `protected` **validateRequiredString**(`value`, `fieldName`): `void`

Defined in: [resources.ts:106](https://github.com/shadmanZero/tenantos-api/blob/507575e6d82ab5e3b8a10f708778a3645f250cd6/src/resources.ts#L106)

Validate required string field

#### Parameters

##### value

`string`

##### fieldName

`string`

#### Returns

`void`

#### Inherited from

`BaseResource.validateRequiredString`

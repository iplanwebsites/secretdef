# @secretdef/sap-hana

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SAP HANA** environment variables.

## Install

```bash
npm install @secretdef/sap-hana secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sap-hana';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HANA_HOST` | SAP HANA host | Yes |
| `HANA_PORT` | SAP HANA port | No |
| `HANA_USER` | SAP HANA user | Yes |
| `HANA_PASSWORD` | SAP HANA password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/microsoft-graph

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Microsoft Graph** environment variables.

## Install

```bash
npm install @secretdef/microsoft-graph secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/microsoft-graph';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MSGRAPH_CLIENT_ID` | Microsoft Graph client ID | Yes |
| `MSGRAPH_CLIENT_SECRET` | Microsoft Graph client secret | Yes |
| `MSGRAPH_TENANT_ID` | Microsoft Graph tenant ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

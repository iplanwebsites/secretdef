# @secretdef/powerbi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Power BI** environment variables.

## Install

```bash
npm install @secretdef/powerbi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/powerbi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POWERBI_CLIENT_ID` | Power BI client ID | Yes |
| `POWERBI_CLIENT_SECRET` | Power BI client secret | Yes |
| `POWERBI_TENANT_ID` | Power BI tenant ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

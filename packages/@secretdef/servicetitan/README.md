# @secretdef/servicetitan

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ServiceTitan** environment variables.

## Install

```bash
npm install @secretdef/servicetitan secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/servicetitan';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SERVICETITAN_CLIENT_ID` | ServiceTitan client ID | Yes |
| `SERVICETITAN_CLIENT_SECRET` | ServiceTitan client secret | Yes |
| `SERVICETITAN_TENANT_ID` | ServiceTitan tenant ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

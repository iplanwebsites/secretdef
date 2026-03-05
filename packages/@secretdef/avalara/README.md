# @secretdef/avalara

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Avalara** environment variables.

## Install

```bash
npm install @secretdef/avalara secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/avalara';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AVALARA_USERNAME` | Avalara username | Yes |
| `AVALARA_PASSWORD` | Avalara password | Yes |
| `AVALARA_COMPANY_CODE` | Avalara company code | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

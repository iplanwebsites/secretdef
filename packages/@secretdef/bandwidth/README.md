# @secretdef/bandwidth

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bandwidth** environment variables.

## Install

```bash
npm install @secretdef/bandwidth secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bandwidth';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BANDWIDTH_USERNAME` | Bandwidth API username | Yes |
| `BANDWIDTH_PASSWORD` | Bandwidth API password | Yes |
| `BANDWIDTH_ACCOUNT_ID` | Bandwidth account ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

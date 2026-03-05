# @secretdef/aircall

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aircall** environment variables.

## Install

```bash
npm install @secretdef/aircall secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aircall';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRCALL_API_ID` | Aircall API ID | Yes |
| `AIRCALL_API_TOKEN` | Aircall API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

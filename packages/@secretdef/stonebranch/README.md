# @secretdef/stonebranch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stonebranch** environment variables.

## Install

```bash
npm install @secretdef/stonebranch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stonebranch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STONEBRANCH_URL` | Stonebranch Universal Controller URL | Yes |
| `STONEBRANCH_TOKEN` | Stonebranch API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

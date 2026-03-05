# @secretdef/oxylabs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Oxylabs** environment variables.

## Install

```bash
npm install @secretdef/oxylabs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/oxylabs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OXYLABS_USERNAME` | Oxylabs username | Yes |
| `OXYLABS_PASSWORD` | Oxylabs password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/sheety

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sheety** environment variables.

## Install

```bash
npm install @secretdef/sheety secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sheety';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHEETY_TOKEN` | Sheety bearer token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

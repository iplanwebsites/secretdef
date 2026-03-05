# @secretdef/aptible

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aptible** environment variables.

## Install

```bash
npm install @secretdef/aptible secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aptible';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APTIBLE_ACCESS_TOKEN` | Aptible access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/kontena

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kontena** environment variables.

## Install

```bash
npm install @secretdef/kontena secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kontena';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KONTENA_TOKEN` | Kontena authentication token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

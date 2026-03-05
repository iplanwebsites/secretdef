# @secretdef/brex

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Brex** environment variables.

## Install

```bash
npm install @secretdef/brex secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/brex';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BREX_TOKEN` | Brex API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

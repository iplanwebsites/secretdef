# @secretdef/whisk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Whisk** environment variables.

## Install

```bash
npm install @secretdef/whisk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/whisk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WHISK_API_TOKEN` | Whisk food API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

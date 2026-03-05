# @secretdef/papertrail

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Papertrail** environment variables.

## Install

```bash
npm install @secretdef/papertrail secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/papertrail';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAPERTRAIL_API_TOKEN` | Papertrail API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

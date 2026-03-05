# @secretdef/samsara

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Samsara** environment variables.

## Install

```bash
npm install @secretdef/samsara secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/samsara';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SAMSARA_API_TOKEN` | Samsara API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

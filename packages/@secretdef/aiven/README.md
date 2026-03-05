# @secretdef/aiven

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aiven** environment variables.

## Install

```bash
npm install @secretdef/aiven secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aiven';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIVEN_TOKEN` | Aiven API token | Yes |
| `AIVEN_PROJECT` | Aiven project name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

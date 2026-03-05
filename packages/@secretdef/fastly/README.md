# @secretdef/fastly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fastly** environment variables.

## Install

```bash
npm install @secretdef/fastly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fastly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FASTLY_API_TOKEN` | Fastly API token | Yes |
| `FASTLY_SERVICE_ID` | Fastly service ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

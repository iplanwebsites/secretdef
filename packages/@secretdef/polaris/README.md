# @secretdef/polaris

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Polaris** environment variables.

## Install

```bash
npm install @secretdef/polaris secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/polaris';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POLARIS_API_KEY` | Polaris API key | Yes |
| `POLARIS_SERVER_URL` | Polaris server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/browserless

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Browserless** environment variables.

## Install

```bash
npm install @secretdef/browserless secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/browserless';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BROWSERLESS_TOKEN` | Browserless API token | Yes |
| `BROWSERLESS_URL` | Browserless instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

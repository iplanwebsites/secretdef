# @secretdef/gravitee

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gravitee** environment variables.

## Install

```bash
npm install @secretdef/gravitee secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gravitee';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GRAVITEE_API_KEY` | Gravitee API management key | Yes |
| `GRAVITEE_URL` | Gravitee management URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

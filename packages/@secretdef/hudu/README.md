# @secretdef/hudu

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hudu** environment variables.

## Install

```bash
npm install @secretdef/hudu secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hudu';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HUDU_API_KEY` | Hudu API key | Yes |
| `HUDU_BASE_URL` | Hudu instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

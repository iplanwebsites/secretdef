# @secretdef/zuplo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zuplo** environment variables.

## Install

```bash
npm install @secretdef/zuplo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zuplo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZUPLO_API_KEY` | Zuplo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

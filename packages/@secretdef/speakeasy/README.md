# @secretdef/speakeasy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Speakeasy** environment variables.

## Install

```bash
npm install @secretdef/speakeasy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/speakeasy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPEAKEASY_API_KEY` | Speakeasy API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

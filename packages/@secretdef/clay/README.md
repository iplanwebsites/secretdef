# @secretdef/clay

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Clay** environment variables.

## Install

```bash
npm install @secretdef/clay secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clay';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLAY_API_KEY` | Clay API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

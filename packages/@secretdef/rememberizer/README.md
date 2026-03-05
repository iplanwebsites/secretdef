# @secretdef/rememberizer

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rememberizer** environment variables.

## Install

```bash
npm install @secretdef/rememberizer secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rememberizer';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REMEMBERIZER_API_KEY` | Rememberizer API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

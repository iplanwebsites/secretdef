# @secretdef/nightfall

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nightfall AI** environment variables.

## Install

```bash
npm install @secretdef/nightfall secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nightfall';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NIGHTFALL_API_KEY` | Nightfall AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

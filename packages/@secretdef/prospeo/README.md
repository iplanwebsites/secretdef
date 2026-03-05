# @secretdef/prospeo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Prospeo** environment variables.

## Install

```bash
npm install @secretdef/prospeo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/prospeo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROSPEO_API_KEY` | Prospeo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

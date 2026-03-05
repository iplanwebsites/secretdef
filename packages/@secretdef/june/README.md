# @secretdef/june

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **June** environment variables.

## Install

```bash
npm install @secretdef/june secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/june';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JUNE_API_KEY` | June analytics API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

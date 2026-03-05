# @secretdef/grain

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Grain** environment variables.

## Install

```bash
npm install @secretdef/grain secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/grain';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GRAIN_API_TOKEN` | Grain API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

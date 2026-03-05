# @secretdef/rockset

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rockset** environment variables.

## Install

```bash
npm install @secretdef/rockset secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rockset';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROCKSET_API_KEY` | Rockset API key | Yes |
| `ROCKSET_API_SERVER` | Rockset API server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

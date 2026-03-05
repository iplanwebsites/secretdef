# @secretdef/bettermode

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bettermode** environment variables.

## Install

```bash
npm install @secretdef/bettermode secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bettermode';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BETTERMODE_API_TOKEN` | Bettermode API token | Yes |
| `BETTERMODE_COMMUNITY_URL` | Bettermode community URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

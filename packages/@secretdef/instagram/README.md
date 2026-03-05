# @secretdef/instagram

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Instagram** environment variables.

## Install

```bash
npm install @secretdef/instagram secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/instagram';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INSTAGRAM_ACCESS_TOKEN` | Instagram Graph API access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

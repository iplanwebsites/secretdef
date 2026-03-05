# @secretdef/userback

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Userback** environment variables.

## Install

```bash
npm install @secretdef/userback secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/userback';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `USERBACK_ACCESS_TOKEN` | Userback access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

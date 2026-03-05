# @secretdef/wrike

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wrike** environment variables.

## Install

```bash
npm install @secretdef/wrike secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wrike';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WRIKE_PERM_ACCESS_TOKEN` | Wrike permanent access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

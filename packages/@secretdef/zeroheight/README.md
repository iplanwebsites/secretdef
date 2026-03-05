# @secretdef/zeroheight

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zeroheight** environment variables.

## Install

```bash
npm install @secretdef/zeroheight secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zeroheight';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZEROHEIGHT_TOKEN` | Zeroheight API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

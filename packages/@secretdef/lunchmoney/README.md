# @secretdef/lunchmoney

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lunch Money** environment variables.

## Install

```bash
npm install @secretdef/lunchmoney secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lunchmoney';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LUNCHMONEY_ACCESS_TOKEN` | Lunch Money API access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

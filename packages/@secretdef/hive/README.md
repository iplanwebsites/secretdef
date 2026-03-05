# @secretdef/hive

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hive Moderation** environment variables.

## Install

```bash
npm install @secretdef/hive secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hive';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HIVE_API_KEY` | Hive Moderation API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

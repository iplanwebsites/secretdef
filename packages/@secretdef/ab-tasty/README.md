# @secretdef/ab-tasty

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AB Tasty** environment variables.

## Install

```bash
npm install @secretdef/ab-tasty secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ab-tasty';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AB_TASTY_API_KEY` | AB Tasty API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

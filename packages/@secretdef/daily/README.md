# @secretdef/daily

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Daily** environment variables.

## Install

```bash
npm install @secretdef/daily secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/daily';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DAILY_API_KEY` | Daily API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

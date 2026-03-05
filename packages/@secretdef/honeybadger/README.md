# @secretdef/honeybadger

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Honeybadger** environment variables.

## Install

```bash
npm install @secretdef/honeybadger secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/honeybadger';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HONEYBADGER_API_KEY` | Honeybadger API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

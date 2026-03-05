# @secretdef/sailthru

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sailthru** environment variables.

## Install

```bash
npm install @secretdef/sailthru secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sailthru';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SAILTHRU_API_KEY` | Sailthru API key | Yes |
| `SAILTHRU_API_SECRET` | Sailthru API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

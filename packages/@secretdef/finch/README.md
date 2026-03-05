# @secretdef/finch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Finch** environment variables.

## Install

```bash
npm install @secretdef/finch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/finch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FINCH_CLIENT_ID` | Finch client ID | Yes |
| `FINCH_CLIENT_SECRET` | Finch client secret | Yes |
| `FINCH_WEBHOOK_SECRET` | Finch webhook secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

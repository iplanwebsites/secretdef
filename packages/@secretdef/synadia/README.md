# @secretdef/synadia

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Synadia/NATS** environment variables.

## Install

```bash
npm install @secretdef/synadia secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/synadia';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NATS_URL` | NATS server URL | Yes |
| `NATS_CREDS` | NATS credentials file content | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

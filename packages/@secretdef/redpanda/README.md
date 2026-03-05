# @secretdef/redpanda

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Redpanda** environment variables.

## Install

```bash
npm install @secretdef/redpanda secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/redpanda';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REDPANDA_BROKERS` | Redpanda broker addresses | Yes |
| `REDPANDA_USERNAME` | Redpanda SASL username | No |
| `REDPANDA_PASSWORD` | Redpanda SASL password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

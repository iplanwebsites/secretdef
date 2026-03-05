# @secretdef/debezium

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Debezium** environment variables.

## Install

```bash
npm install @secretdef/debezium secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/debezium';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEBEZIUM_CONNECT_URL` | Debezium Connect REST API URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

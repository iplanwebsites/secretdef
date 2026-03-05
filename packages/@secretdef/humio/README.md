# @secretdef/humio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Humio/LogScale** environment variables.

## Install

```bash
npm install @secretdef/humio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/humio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HUMIO_TOKEN` | Humio/LogScale ingest token | Yes |
| `HUMIO_URL` | Humio/LogScale URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

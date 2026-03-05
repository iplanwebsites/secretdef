# @secretdef/mezmo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mezmo (LogDNA)** environment variables.

## Install

```bash
npm install @secretdef/mezmo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mezmo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEZMO_API_KEY` | Mezmo API key | Yes |
| `MEZMO_INGESTION_KEY` | Mezmo ingestion key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

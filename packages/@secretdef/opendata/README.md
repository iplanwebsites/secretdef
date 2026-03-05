# @secretdef/opendata

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Open Data (data.gov)** environment variables.

## Install

```bash
npm install @secretdef/opendata secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opendata';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DATA_GOV_API_KEY` | Data.gov API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

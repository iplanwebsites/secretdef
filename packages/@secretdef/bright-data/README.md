# @secretdef/bright-data

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bright Data** environment variables.

## Install

```bash
npm install @secretdef/bright-data secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bright-data';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BRIGHT_DATA_API_TOKEN` | Bright Data API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

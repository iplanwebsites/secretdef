# @secretdef/sparkpost

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SparkPost** environment variables.

## Install

```bash
npm install @secretdef/sparkpost secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sparkpost';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPARKPOST_API_KEY` | SparkPost API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

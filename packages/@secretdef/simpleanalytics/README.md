# @secretdef/simpleanalytics

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Simple Analytics** environment variables.

## Install

```bash
npm install @secretdef/simpleanalytics secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/simpleanalytics';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIMPLEANALYTICS_API_KEY` | Simple Analytics API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

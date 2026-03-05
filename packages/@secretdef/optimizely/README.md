# @secretdef/optimizely

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Optimizely** environment variables.

## Install

```bash
npm install @secretdef/optimizely secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/optimizely';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPTIMIZELY_SDK_KEY` | Optimizely SDK key | Yes |
| `OPTIMIZELY_ACCESS_TOKEN` | Optimizely REST API access token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

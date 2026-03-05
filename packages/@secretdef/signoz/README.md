# @secretdef/signoz

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SigNoz** environment variables.

## Install

```bash
npm install @secretdef/signoz secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/signoz';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGNOZ_ACCESS_TOKEN` | SigNoz access token | Yes |
| `SIGNOZ_COLLECTOR_URL` | SigNoz collector URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/ip2location

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **IP2Location** environment variables.

## Install

```bash
npm install @secretdef/ip2location secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ip2location';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IP2LOCATION_API_KEY` | IP2Location API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

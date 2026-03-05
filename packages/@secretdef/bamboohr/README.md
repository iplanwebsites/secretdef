# @secretdef/bamboohr

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BambooHR** environment variables.

## Install

```bash
npm install @secretdef/bamboohr secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bamboohr';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BAMBOOHR_API_KEY` | BambooHR API key | Yes |
| `BAMBOOHR_SUBDOMAIN` | BambooHR company subdomain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

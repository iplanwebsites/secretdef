# @secretdef/census

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **US Census** environment variables.

## Install

```bash
npm install @secretdef/census secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/census';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CENSUS_API_KEY` | US Census API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

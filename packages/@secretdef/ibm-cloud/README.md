# @secretdef/ibm-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **IBM Cloud** environment variables.

## Install

```bash
npm install @secretdef/ibm-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ibm-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IBM_CLOUD_API_KEY` | IBM Cloud API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

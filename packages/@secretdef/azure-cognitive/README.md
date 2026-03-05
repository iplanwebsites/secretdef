# @secretdef/azure-cognitive

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Cognitive Services** environment variables.

## Install

```bash
npm install @secretdef/azure-cognitive secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-cognitive';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_COGNITIVE_ENDPOINT` | Azure Cognitive Services endpoint | Yes |
| `AZURE_COGNITIVE_KEY` | Azure Cognitive Services key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

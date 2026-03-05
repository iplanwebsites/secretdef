# @secretdef/azure-translator

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Azure Translator** environment variables.

## Install

```bash
npm install @secretdef/azure-translator secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/azure-translator';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AZURE_TRANSLATOR_KEY` | Azure Translator API key | Yes |
| `AZURE_TRANSLATOR_REGION` | Azure Translator region | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

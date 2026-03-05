# @secretdef/pdfco

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PDF.co** environment variables.

## Install

```bash
npm install @secretdef/pdfco secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pdfco';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PDFCO_API_KEY` | PDF.co API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

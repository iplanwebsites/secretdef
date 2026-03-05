# @secretdef/smallpdf

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Smallpdf** environment variables.

## Install

```bash
npm install @secretdef/smallpdf secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/smallpdf';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SMALLPDF_API_KEY` | Smallpdf API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

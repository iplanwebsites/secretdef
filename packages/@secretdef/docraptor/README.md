# @secretdef/docraptor

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DocRaptor** environment variables.

## Install

```bash
npm install @secretdef/docraptor secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/docraptor';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOCRAPTOR_API_KEY` | DocRaptor PDF generation API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

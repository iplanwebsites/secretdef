# @secretdef/ocr-space

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OCR.space** environment variables.

## Install

```bash
npm install @secretdef/ocr-space secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ocr-space';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OCR_SPACE_API_KEY` | OCR.space API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

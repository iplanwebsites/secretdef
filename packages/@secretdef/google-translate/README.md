# @secretdef/google-translate

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Translate** environment variables.

## Install

```bash
npm install @secretdef/google-translate secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/google-translate';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_TRANSLATE_API_KEY` | Google Translate API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

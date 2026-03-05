# @secretdef/openaq

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenAQ** environment variables.

## Install

```bash
npm install @secretdef/openaq secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openaq';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAQ_API_KEY` | OpenAQ air quality API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

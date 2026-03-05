# @secretdef/apideck

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apideck** environment variables.

## Install

```bash
npm install @secretdef/apideck secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apideck';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APIDECK_API_KEY` | Apideck API key | Yes |
| `APIDECK_APP_ID` | Apideck application ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

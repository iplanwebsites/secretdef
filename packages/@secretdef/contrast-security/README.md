# @secretdef/contrast-security

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Contrast Security** environment variables.

## Install

```bash
npm install @secretdef/contrast-security secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/contrast-security';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONTRAST_API_KEY` | Contrast Security API key | Yes |
| `CONTRAST_SERVICE_KEY` | Contrast Security service key | Yes |
| `CONTRAST_ORG_UUID` | Contrast Security org UUID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

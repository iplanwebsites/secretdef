# @secretdef/boxyhq-saml

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BoxyHQ SAML Jackson** environment variables.

## Install

```bash
npm install @secretdef/boxyhq-saml secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/boxyhq-saml';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOXYHQ_SAML_API_KEY` | BoxyHQ SAML Jackson API key | Yes |
| `BOXYHQ_SAML_HOST` | BoxyHQ SAML Jackson host URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

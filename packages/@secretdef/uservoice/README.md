# @secretdef/uservoice

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **UserVoice** environment variables.

## Install

```bash
npm install @secretdef/uservoice secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/uservoice';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `USERVOICE_API_KEY` | UserVoice API key | Yes |
| `USERVOICE_SUBDOMAIN` | UserVoice subdomain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

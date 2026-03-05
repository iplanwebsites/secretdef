# @secretdef/linkedin

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LinkedIn** environment variables.

## Install

```bash
npm install @secretdef/linkedin secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/linkedin';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LINKEDIN_CLIENT_ID` | LinkedIn OAuth client ID | Yes |
| `LINKEDIN_CLIENT_SECRET` | LinkedIn OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

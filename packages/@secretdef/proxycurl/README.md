# @secretdef/proxycurl

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Proxycurl** environment variables.

## Install

```bash
npm install @secretdef/proxycurl secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/proxycurl';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROXYCURL_API_KEY` | Proxycurl API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

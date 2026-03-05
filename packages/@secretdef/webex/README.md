# @secretdef/webex

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Webex** environment variables.

## Install

```bash
npm install @secretdef/webex secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/webex';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WEBEX_ACCESS_TOKEN` | Webex access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

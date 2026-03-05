# @secretdef/parse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Parse Server** environment variables.

## Install

```bash
npm install @secretdef/parse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/parse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PARSE_APP_ID` | Parse application ID | Yes |
| `PARSE_MASTER_KEY` | Parse master key | Yes |
| `PARSE_SERVER_URL` | Parse server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

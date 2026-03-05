# @secretdef/anymail

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Anymail** environment variables.

## Install

```bash
npm install @secretdef/anymail secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/anymail';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ANYMAIL_API_KEY` | Anymail API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

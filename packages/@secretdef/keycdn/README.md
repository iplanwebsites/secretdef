# @secretdef/keycdn

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **KeyCDN** environment variables.

## Install

```bash
npm install @secretdef/keycdn secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/keycdn';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KEYCDN_API_KEY` | KeyCDN API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

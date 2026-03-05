# @secretdef/devhub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DevHub** environment variables.

## Install

```bash
npm install @secretdef/devhub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/devhub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEVHUB_API_KEY` | DevHub API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

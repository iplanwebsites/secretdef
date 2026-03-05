# @secretdef/diffbot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Diffbot** environment variables.

## Install

```bash
npm install @secretdef/diffbot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/diffbot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DIFFBOT_TOKEN` | Diffbot API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

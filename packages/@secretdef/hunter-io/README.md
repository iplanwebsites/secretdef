# @secretdef/hunter-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hunter.io** environment variables.

## Install

```bash
npm install @secretdef/hunter-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hunter-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HUNTER_API_KEY` | Hunter.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

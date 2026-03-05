# @secretdef/zenhub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZenHub** environment variables.

## Install

```bash
npm install @secretdef/zenhub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zenhub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZENHUB_API_TOKEN` | ZenHub API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

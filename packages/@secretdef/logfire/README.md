# @secretdef/logfire

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Logfire** environment variables.

## Install

```bash
npm install @secretdef/logfire secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/logfire';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOGFIRE_TOKEN` | Logfire write token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/rebuff

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rebuff AI** environment variables.

## Install

```bash
npm install @secretdef/rebuff secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rebuff';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REBUFF_API_TOKEN` | Rebuff prompt injection detection token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

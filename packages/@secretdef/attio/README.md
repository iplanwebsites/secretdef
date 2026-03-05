# @secretdef/attio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Attio** environment variables.

## Install

```bash
npm install @secretdef/attio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/attio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ATTIO_API_KEY` | Attio API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

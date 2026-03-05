# @secretdef/opik

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Opik** environment variables.

## Install

```bash
npm install @secretdef/opik secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opik';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPIK_API_KEY` | Opik API key | Yes |
| `OPIK_WORKSPACE` | Opik workspace | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

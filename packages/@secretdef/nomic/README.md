# @secretdef/nomic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nomic** environment variables.

## Install

```bash
npm install @secretdef/nomic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nomic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NOMIC_API_KEY` | Nomic Atlas API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

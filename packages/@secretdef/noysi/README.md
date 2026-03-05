# @secretdef/noysi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Noysi** environment variables.

## Install

```bash
npm install @secretdef/noysi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/noysi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NOYSI_API_TOKEN` | Noysi API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

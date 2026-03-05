# @secretdef/pinata

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pinata** environment variables.

## Install

```bash
npm install @secretdef/pinata secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pinata';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PINATA_JWT` | Pinata JWT token | Yes |
| `PINATA_API_KEY` | Pinata API key | No |
| `PINATA_API_SECRET` | Pinata API secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

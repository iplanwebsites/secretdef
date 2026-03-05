# @secretdef/tresata

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tresata** environment variables.

## Install

```bash
npm install @secretdef/tresata secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tresata';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRESATA_API_KEY` | Tresata API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

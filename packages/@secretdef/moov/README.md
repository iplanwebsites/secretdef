# @secretdef/moov

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Moov** environment variables.

## Install

```bash
npm install @secretdef/moov secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/moov';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MOOV_SECRET_KEY` | Moov secret key | Yes |
| `MOOV_PUBLIC_KEY` | Moov public key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

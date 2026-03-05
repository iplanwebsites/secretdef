# @secretdef/refersion

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Refersion** environment variables.

## Install

```bash
npm install @secretdef/refersion secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/refersion';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REFERSION_PUBLIC_KEY` | Refersion public key | Yes |
| `REFERSION_SECRET_KEY` | Refersion secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

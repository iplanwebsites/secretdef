# @secretdef/flutterwave

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Flutterwave** environment variables.

## Install

```bash
npm install @secretdef/flutterwave secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/flutterwave';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FLUTTERWAVE_SECRET_KEY` | Flutterwave secret key | Yes |
| `FLUTTERWAVE_PUBLIC_KEY` | Flutterwave public key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

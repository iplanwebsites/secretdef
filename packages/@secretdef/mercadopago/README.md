# @secretdef/mercadopago

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mercado Pago** environment variables.

## Install

```bash
npm install @secretdef/mercadopago secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mercadopago';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MERCADOPAGO_ACCESS_TOKEN` | Mercado Pago access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

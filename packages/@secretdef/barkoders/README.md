# @secretdef/barkoders

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Barkoders** environment variables.

## Install

```bash
npm install @secretdef/barkoders secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/barkoders';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BARKODERS_LICENSE_KEY` | Barkoders barcode SDK license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

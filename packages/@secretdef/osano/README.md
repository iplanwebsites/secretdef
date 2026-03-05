# @secretdef/osano

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Osano** environment variables.

## Install

```bash
npm install @secretdef/osano secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/osano';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OSANO_CUSTOMER_ID` | Osano customer ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

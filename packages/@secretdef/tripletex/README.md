# @secretdef/tripletex

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tripletex** environment variables.

## Install

```bash
npm install @secretdef/tripletex secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tripletex';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRIPLETEX_CONSUMER_TOKEN` | Tripletex consumer token | Yes |
| `TRIPLETEX_EMPLOYEE_TOKEN` | Tripletex employee token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

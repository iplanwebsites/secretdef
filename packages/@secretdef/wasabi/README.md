# @secretdef/wasabi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wasabi** environment variables.

## Install

```bash
npm install @secretdef/wasabi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wasabi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WASABI_ACCESS_KEY_ID` | Wasabi access key ID | Yes |
| `WASABI_SECRET_ACCESS_KEY` | Wasabi secret access key | Yes |
| `WASABI_REGION` | Wasabi region | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

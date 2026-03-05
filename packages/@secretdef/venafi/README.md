# @secretdef/venafi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Venafi** environment variables.

## Install

```bash
npm install @secretdef/venafi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/venafi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VENAFI_TPP_URL` | Venafi TPP URL | Yes |
| `VENAFI_TPP_TOKEN` | Venafi TPP access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

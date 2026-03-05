# @secretdef/viam

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Viam** environment variables.

## Install

```bash
npm install @secretdef/viam secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/viam';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VIAM_API_KEY` | Viam API key | Yes |
| `VIAM_API_KEY_ID` | Viam API key ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/spacelift

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Spacelift** environment variables.

## Install

```bash
npm install @secretdef/spacelift secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/spacelift';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPACELIFT_API_KEY_ID` | Spacelift API key ID | Yes |
| `SPACELIFT_API_KEY_SECRET` | Spacelift API key secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

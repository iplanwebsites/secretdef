# @secretdef/thales

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Thales CipherTrust** environment variables.

## Install

```bash
npm install @secretdef/thales secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/thales';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CIPHERTRUST_URL` | CipherTrust Manager URL | Yes |
| `CIPHERTRUST_USERNAME` | CipherTrust username | Yes |
| `CIPHERTRUST_PASSWORD` | CipherTrust password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

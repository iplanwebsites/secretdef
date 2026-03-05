# @secretdef/byteplus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BytePlus** environment variables.

## Install

```bash
npm install @secretdef/byteplus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/byteplus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BYTEPLUS_ACCESS_KEY` | BytePlus access key | Yes |
| `BYTEPLUS_SECRET_KEY` | BytePlus secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

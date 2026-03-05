# @secretdef/memberstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Memberstack** environment variables.

## Install

```bash
npm install @secretdef/memberstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/memberstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEMBERSTACK_SECRET_KEY` | Memberstack secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/emarsys

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Emarsys** environment variables.

## Install

```bash
npm install @secretdef/emarsys secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/emarsys';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EMARSYS_API_USERNAME` | Emarsys API username | Yes |
| `EMARSYS_API_SECRET` | Emarsys API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

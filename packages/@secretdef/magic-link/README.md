# @secretdef/magic-link

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Magic** environment variables.

## Install

```bash
npm install @secretdef/magic-link secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/magic-link';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAGIC_SECRET_KEY` | Magic secret key | Yes |
| `MAGIC_PUBLISHABLE_KEY` | Magic publishable key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

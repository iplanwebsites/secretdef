# @secretdef/nango

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Nango** environment variables.

## Install

```bash
npm install @secretdef/nango secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/nango';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NANGO_SECRET_KEY` | Nango secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

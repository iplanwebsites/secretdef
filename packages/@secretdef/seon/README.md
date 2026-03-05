# @secretdef/seon

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SEON** environment variables.

## Install

```bash
npm install @secretdef/seon secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/seon';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEON_LICENSE_KEY` | SEON license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

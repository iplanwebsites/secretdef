# @secretdef/slapdash

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Slapdash** environment variables.

## Install

```bash
npm install @secretdef/slapdash secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/slapdash';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SLAPDASH_API_TOKEN` | Slapdash API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

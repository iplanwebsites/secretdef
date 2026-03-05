# @secretdef/gitter

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gitter** environment variables.

## Install

```bash
npm install @secretdef/gitter secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gitter';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GITTER_TOKEN` | Gitter API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

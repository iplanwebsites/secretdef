# @secretdef/gist

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gist** environment variables.

## Install

```bash
npm install @secretdef/gist secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gist';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GIST_API_TOKEN` | Gist API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/frontapp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Front** environment variables.

## Install

```bash
npm install @secretdef/frontapp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/frontapp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRONT_API_TOKEN` | Front API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

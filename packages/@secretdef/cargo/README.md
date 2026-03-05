# @secretdef/cargo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cargo** environment variables.

## Install

```bash
npm install @secretdef/cargo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cargo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CARGO_REGISTRY_TOKEN` | Cargo alternate registry token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

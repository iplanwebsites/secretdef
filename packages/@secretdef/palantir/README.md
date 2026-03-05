# @secretdef/palantir

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Palantir Foundry** environment variables.

## Install

```bash
npm install @secretdef/palantir secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/palantir';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PALANTIR_TOKEN` | Palantir Foundry auth token | Yes |
| `PALANTIR_URL` | Palantir Foundry URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

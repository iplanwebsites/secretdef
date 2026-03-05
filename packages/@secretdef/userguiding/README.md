# @secretdef/userguiding

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **UserGuiding** environment variables.

## Install

```bash
npm install @secretdef/userguiding secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/userguiding';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `USERGUIDING_TOKEN` | UserGuiding token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

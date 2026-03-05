# @secretdef/polar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Polar** environment variables.

## Install

```bash
npm install @secretdef/polar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/polar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POLAR_ACCESS_TOKEN` | Polar access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/eigen

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Eigen Technologies** environment variables.

## Install

```bash
npm install @secretdef/eigen secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/eigen';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EIGEN_API_KEY` | Eigen Technologies API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

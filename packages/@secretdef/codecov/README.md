# @secretdef/codecov

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Codecov** environment variables.

## Install

```bash
npm install @secretdef/codecov secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/codecov';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CODECOV_TOKEN` | Codecov upload token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

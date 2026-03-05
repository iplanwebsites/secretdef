# @secretdef/pypi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PyPI** environment variables.

## Install

```bash
npm install @secretdef/pypi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pypi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PYPI_API_TOKEN` | PyPI API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

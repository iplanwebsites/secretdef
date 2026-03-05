# @secretdef/unstructured

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Unstructured** environment variables.

## Install

```bash
npm install @secretdef/unstructured secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/unstructured';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UNSTRUCTURED_API_KEY` | Unstructured API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

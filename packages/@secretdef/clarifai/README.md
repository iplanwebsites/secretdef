# @secretdef/clarifai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Clarifai** environment variables.

## Install

```bash
npm install @secretdef/clarifai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clarifai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLARIFAI_PAT` | Clarifai personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

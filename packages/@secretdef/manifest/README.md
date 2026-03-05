# @secretdef/manifest

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Manifest** environment variables.

## Install

```bash
npm install @secretdef/manifest secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/manifest';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MANIFEST_API_KEY` | Manifest API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

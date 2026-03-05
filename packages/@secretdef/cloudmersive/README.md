# @secretdef/cloudmersive

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cloudmersive** environment variables.

## Install

```bash
npm install @secretdef/cloudmersive secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cloudmersive';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOUDMERSIVE_API_KEY` | Cloudmersive API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

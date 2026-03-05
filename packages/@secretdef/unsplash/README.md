# @secretdef/unsplash

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Unsplash** environment variables.

## Install

```bash
npm install @secretdef/unsplash secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/unsplash';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UNSPLASH_ACCESS_KEY` | Unsplash access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

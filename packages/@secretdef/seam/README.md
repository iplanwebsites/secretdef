# @secretdef/seam

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Seam** environment variables.

## Install

```bash
npm install @secretdef/seam secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/seam';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEAM_API_KEY` | Seam API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

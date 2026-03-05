# @secretdef/canny

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Canny** environment variables.

## Install

```bash
npm install @secretdef/canny secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/canny';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CANNY_API_KEY` | Canny API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

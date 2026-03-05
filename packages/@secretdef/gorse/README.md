# @secretdef/gorse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gorse** environment variables.

## Install

```bash
npm install @secretdef/gorse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gorse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GORSE_API_KEY` | Gorse recommendation API key | Yes |
| `GORSE_URL` | Gorse server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

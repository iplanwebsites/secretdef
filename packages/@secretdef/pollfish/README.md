# @secretdef/pollfish

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pollfish** environment variables.

## Install

```bash
npm install @secretdef/pollfish secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pollfish';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `POLLFISH_API_KEY` | Pollfish API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

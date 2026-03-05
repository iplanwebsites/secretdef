# @secretdef/canva

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Canva** environment variables.

## Install

```bash
npm install @secretdef/canva secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/canva';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CANVA_API_KEY` | Canva Connect API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

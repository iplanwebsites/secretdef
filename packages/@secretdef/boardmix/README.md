# @secretdef/boardmix

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Boardmix** environment variables.

## Install

```bash
npm install @secretdef/boardmix secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/boardmix';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOARDMIX_API_KEY` | Boardmix API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

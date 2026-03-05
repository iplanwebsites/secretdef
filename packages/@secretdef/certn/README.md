# @secretdef/certn

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Certn** environment variables.

## Install

```bash
npm install @secretdef/certn secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/certn';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CERTN_API_KEY` | Certn background check API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

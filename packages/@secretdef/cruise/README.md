# @secretdef/cruise

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cruise** environment variables.

## Install

```bash
npm install @secretdef/cruise secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cruise';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRUISE_API_KEY` | Cruise API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

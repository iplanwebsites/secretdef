# @secretdef/peaka

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Peaka** environment variables.

## Install

```bash
npm install @secretdef/peaka secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/peaka';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PEAKA_API_KEY` | Peaka API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

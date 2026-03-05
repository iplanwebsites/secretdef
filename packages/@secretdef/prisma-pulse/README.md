# @secretdef/prisma-pulse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Prisma Pulse** environment variables.

## Install

```bash
npm install @secretdef/prisma-pulse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/prisma-pulse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PRISMA_PULSE_API_KEY` | Prisma Pulse real-time API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

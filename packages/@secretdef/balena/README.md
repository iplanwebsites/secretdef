# @secretdef/balena

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Balena** environment variables.

## Install

```bash
npm install @secretdef/balena secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/balena';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BALENA_API_KEY` | Balena API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

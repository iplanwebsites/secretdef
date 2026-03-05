# @secretdef/zonos

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zonos** environment variables.

## Install

```bash
npm install @secretdef/zonos secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zonos';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZONOS_API_KEY` | Zonos cross-border API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

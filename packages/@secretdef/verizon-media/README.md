# @secretdef/verizon-media

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Verizon Media** environment variables.

## Install

```bash
npm install @secretdef/verizon-media secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/verizon-media';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VERIZON_MEDIA_API_KEY` | Verizon Media API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

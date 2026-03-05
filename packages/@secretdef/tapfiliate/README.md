# @secretdef/tapfiliate

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tapfiliate** environment variables.

## Install

```bash
npm install @secretdef/tapfiliate secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tapfiliate';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TAPFILIATE_API_KEY` | Tapfiliate API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

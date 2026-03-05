# @secretdef/shipday

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Shipday** environment variables.

## Install

```bash
npm install @secretdef/shipday secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/shipday';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHIPDAY_API_KEY` | Shipday API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/corrily

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Corrily** environment variables.

## Install

```bash
npm install @secretdef/corrily secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/corrily';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CORRILY_API_KEY` | Corrily pricing API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

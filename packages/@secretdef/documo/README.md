# @secretdef/documo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Documo** environment variables.

## Install

```bash
npm install @secretdef/documo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/documo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOCUMO_API_KEY` | Documo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

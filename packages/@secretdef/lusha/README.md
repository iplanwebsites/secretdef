# @secretdef/lusha

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lusha** environment variables.

## Install

```bash
npm install @secretdef/lusha secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lusha';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LUSHA_API_KEY` | Lusha API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

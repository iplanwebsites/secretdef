# @secretdef/krea

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Krea** environment variables.

## Install

```bash
npm install @secretdef/krea secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/krea';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KREA_API_KEY` | Krea image API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

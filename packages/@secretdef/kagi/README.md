# @secretdef/kagi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kagi** environment variables.

## Install

```bash
npm install @secretdef/kagi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kagi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KAGI_API_KEY` | Kagi search API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

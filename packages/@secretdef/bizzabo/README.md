# @secretdef/bizzabo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bizzabo** environment variables.

## Install

```bash
npm install @secretdef/bizzabo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bizzabo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BIZZABO_API_KEY` | Bizzabo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

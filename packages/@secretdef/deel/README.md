# @secretdef/deel

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Deel** environment variables.

## Install

```bash
npm install @secretdef/deel secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/deel';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEEL_API_TOKEN` | Deel API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

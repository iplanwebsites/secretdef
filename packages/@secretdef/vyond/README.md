# @secretdef/vyond

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vyond** environment variables.

## Install

```bash
npm install @secretdef/vyond secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vyond';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VYOND_API_KEY` | Vyond API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

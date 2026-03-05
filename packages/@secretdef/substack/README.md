# @secretdef/substack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Substack** environment variables.

## Install

```bash
npm install @secretdef/substack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/substack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SUBSTACK_API_TOKEN` | Substack API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

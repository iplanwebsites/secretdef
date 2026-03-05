# @secretdef/promptfoo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Promptfoo** environment variables.

## Install

```bash
npm install @secretdef/promptfoo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/promptfoo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROMPTFOO_API_KEY` | Promptfoo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

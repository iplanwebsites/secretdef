# @secretdef/teachable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Teachable** environment variables.

## Install

```bash
npm install @secretdef/teachable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/teachable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TEACHABLE_API_KEY` | Teachable API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/mindee

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mindee** environment variables.

## Install

```bash
npm install @secretdef/mindee secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mindee';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MINDEE_API_KEY` | Mindee API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/traceable

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Traceable AI** environment variables.

## Install

```bash
npm install @secretdef/traceable secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/traceable';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRACEABLE_API_TOKEN` | Traceable AI API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

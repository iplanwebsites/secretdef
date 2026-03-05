# @secretdef/composio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Composio** environment variables.

## Install

```bash
npm install @secretdef/composio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/composio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMPOSIO_API_KEY` | Composio API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

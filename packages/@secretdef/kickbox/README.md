# @secretdef/kickbox

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kickbox** environment variables.

## Install

```bash
npm install @secretdef/kickbox secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kickbox';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KICKBOX_API_KEY` | Kickbox email verification API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

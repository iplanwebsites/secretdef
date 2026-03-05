# @secretdef/bridger

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bridger** environment variables.

## Install

```bash
npm install @secretdef/bridger secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bridger';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BRIDGER_API_KEY` | Bridger API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

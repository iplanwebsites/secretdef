# @secretdef/twelve-labs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Twelve Labs** environment variables.

## Install

```bash
npm install @secretdef/twelve-labs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/twelve-labs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TWELVE_LABS_API_KEY` | Twelve Labs video AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

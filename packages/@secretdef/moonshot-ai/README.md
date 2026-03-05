# @secretdef/moonshot-ai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Moonshot AI** environment variables.

## Install

```bash
npm install @secretdef/moonshot-ai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/moonshot-ai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MOONSHOT_API_KEY` | Moonshot AI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

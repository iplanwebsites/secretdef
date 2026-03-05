# @secretdef/ai21

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AI21 Labs** environment variables.

## Install

```bash
npm install @secretdef/ai21 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ai21';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AI21_API_KEY` | AI21 Labs API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

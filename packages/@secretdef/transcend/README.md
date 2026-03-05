# @secretdef/transcend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Transcend** environment variables.

## Install

```bash
npm install @secretdef/transcend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/transcend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRANSCEND_API_KEY` | Transcend API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

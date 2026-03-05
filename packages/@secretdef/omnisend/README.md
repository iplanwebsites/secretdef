# @secretdef/omnisend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Omnisend** environment variables.

## Install

```bash
npm install @secretdef/omnisend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/omnisend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OMNISEND_API_KEY` | Omnisend API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/banana-dev

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Banana Dev** environment variables.

## Install

```bash
npm install @secretdef/banana-dev secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/banana-dev';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BANANA_API_KEY` | Banana API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

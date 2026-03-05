# @secretdef/bannerbear

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bannerbear** environment variables.

## Install

```bash
npm install @secretdef/bannerbear secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bannerbear';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BANNERBEAR_API_KEY` | Bannerbear API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

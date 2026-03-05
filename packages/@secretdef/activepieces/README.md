# @secretdef/activepieces

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Activepieces** environment variables.

## Install

```bash
npm install @secretdef/activepieces secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/activepieces';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ACTIVEPIECES_API_KEY` | Activepieces API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

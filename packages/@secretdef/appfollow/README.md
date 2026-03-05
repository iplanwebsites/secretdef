# @secretdef/appfollow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AppFollow** environment variables.

## Install

```bash
npm install @secretdef/appfollow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/appfollow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APPFOLLOW_API_KEY` | AppFollow API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

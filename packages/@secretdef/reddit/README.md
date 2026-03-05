# @secretdef/reddit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Reddit** environment variables.

## Install

```bash
npm install @secretdef/reddit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/reddit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REDDIT_CLIENT_ID` | Reddit OAuth client ID | Yes |
| `REDDIT_CLIENT_SECRET` | Reddit OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

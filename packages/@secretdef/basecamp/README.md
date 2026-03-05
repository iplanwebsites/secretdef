# @secretdef/basecamp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Basecamp** environment variables.

## Install

```bash
npm install @secretdef/basecamp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/basecamp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BASECAMP_CLIENT_ID` | Basecamp OAuth client ID | Yes |
| `BASECAMP_CLIENT_SECRET` | Basecamp OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

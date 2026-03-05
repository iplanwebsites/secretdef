# @secretdef/freshbooks

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **FreshBooks** environment variables.

## Install

```bash
npm install @secretdef/freshbooks secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/freshbooks';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRESHBOOKS_CLIENT_ID` | FreshBooks OAuth client ID | Yes |
| `FRESHBOOKS_CLIENT_SECRET` | FreshBooks OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

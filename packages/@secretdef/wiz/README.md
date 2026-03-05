# @secretdef/wiz

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wiz** environment variables.

## Install

```bash
npm install @secretdef/wiz secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wiz';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WIZ_CLIENT_ID` | Wiz client ID | Yes |
| `WIZ_CLIENT_SECRET` | Wiz client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

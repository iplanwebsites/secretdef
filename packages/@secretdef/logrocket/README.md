# @secretdef/logrocket

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LogRocket** environment variables.

## Install

```bash
npm install @secretdef/logrocket secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/logrocket';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOGROCKET_APP_ID` | LogRocket app ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

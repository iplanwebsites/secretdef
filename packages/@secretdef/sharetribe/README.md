# @secretdef/sharetribe

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sharetribe** environment variables.

## Install

```bash
npm install @secretdef/sharetribe secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sharetribe';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHARETRIBE_SDK_CLIENT_ID` | Sharetribe SDK client ID | Yes |
| `SHARETRIBE_SDK_CLIENT_SECRET` | Sharetribe SDK client secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

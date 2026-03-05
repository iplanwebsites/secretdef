# @secretdef/sendbird

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Sendbird** environment variables.

## Install

```bash
npm install @secretdef/sendbird secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sendbird';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SENDBIRD_APP_ID` | Sendbird application ID | Yes |
| `SENDBIRD_API_TOKEN` | Sendbird API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

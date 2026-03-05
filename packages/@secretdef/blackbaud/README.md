# @secretdef/blackbaud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Blackbaud** environment variables.

## Install

```bash
npm install @secretdef/blackbaud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/blackbaud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BLACKBAUD_SUBSCRIPTION_KEY` | Blackbaud SKY API subscription key | Yes |
| `BLACKBAUD_ACCESS_TOKEN` | Blackbaud OAuth access token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

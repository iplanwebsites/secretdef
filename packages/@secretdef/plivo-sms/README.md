# @secretdef/plivo-sms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Plivo SMS** environment variables.

## Install

```bash
npm install @secretdef/plivo-sms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/plivo-sms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLIVO_SMS_AUTH_ID` | Plivo SMS auth ID | Yes |
| `PLIVO_SMS_AUTH_TOKEN` | Plivo SMS auth token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

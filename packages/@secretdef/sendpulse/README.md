# @secretdef/sendpulse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SendPulse** environment variables.

## Install

```bash
npm install @secretdef/sendpulse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/sendpulse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SENDPULSE_API_ID` | SendPulse API user ID | Yes |
| `SENDPULSE_API_SECRET` | SendPulse API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

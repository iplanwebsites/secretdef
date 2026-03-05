# @secretdef/cybersource

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CyberSource** environment variables.

## Install

```bash
npm install @secretdef/cybersource secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cybersource';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CYBERSOURCE_ACCESS_KEY` | CyberSource access key | Yes |
| `CYBERSOURCE_SECRET_KEY` | CyberSource secret key | Yes |
| `CYBERSOURCE_MERCHANT_ID` | CyberSource merchant ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

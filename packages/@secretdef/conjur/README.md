# @secretdef/conjur

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CyberArk Conjur** environment variables.

## Install

```bash
npm install @secretdef/conjur secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/conjur';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONJUR_APPLIANCE_URL` | Conjur appliance URL | Yes |
| `CONJUR_ACCOUNT` | Conjur account name | Yes |
| `CONJUR_AUTHN_API_KEY` | Conjur authentication API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/partnerstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PartnerStack** environment variables.

## Install

```bash
npm install @secretdef/partnerstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/partnerstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PARTNERSTACK_PUBLIC_KEY` | PartnerStack public key | Yes |
| `PARTNERSTACK_SECRET_KEY` | PartnerStack secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

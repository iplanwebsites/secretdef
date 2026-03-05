# @secretdef/orb-billing

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Orb Billing** environment variables.

## Install

```bash
npm install @secretdef/orb-billing secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/orb-billing';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ORB_API_KEY` | Orb API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/trustpilot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Trustpilot** environment variables.

## Install

```bash
npm install @secretdef/trustpilot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/trustpilot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRUSTPILOT_API_KEY` | Trustpilot API key | Yes |
| `TRUSTPILOT_SECRET` | Trustpilot API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

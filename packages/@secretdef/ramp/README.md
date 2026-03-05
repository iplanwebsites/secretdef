# @secretdef/ramp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ramp** environment variables.

## Install

```bash
npm install @secretdef/ramp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ramp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RAMP_CLIENT_ID` | Ramp OAuth client ID | Yes |
| `RAMP_CLIENT_SECRET` | Ramp OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

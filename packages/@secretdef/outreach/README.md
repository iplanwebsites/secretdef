# @secretdef/outreach

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Outreach** environment variables.

## Install

```bash
npm install @secretdef/outreach secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/outreach';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OUTREACH_CLIENT_ID` | Outreach OAuth client ID | Yes |
| `OUTREACH_CLIENT_SECRET` | Outreach OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

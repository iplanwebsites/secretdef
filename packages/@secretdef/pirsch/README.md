# @secretdef/pirsch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pirsch** environment variables.

## Install

```bash
npm install @secretdef/pirsch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pirsch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PIRSCH_CLIENT_ID` | Pirsch client ID | Yes |
| `PIRSCH_CLIENT_SECRET` | Pirsch client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

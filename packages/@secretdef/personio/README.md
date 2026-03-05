# @secretdef/personio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Personio** environment variables.

## Install

```bash
npm install @secretdef/personio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/personio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PERSONIO_CLIENT_ID` | Personio client ID | Yes |
| `PERSONIO_CLIENT_SECRET` | Personio client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/lacework

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lacework** environment variables.

## Install

```bash
npm install @secretdef/lacework secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lacework';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LACEWORK_API_KEY` | Lacework API key | Yes |
| `LACEWORK_API_SECRET` | Lacework API secret | Yes |
| `LACEWORK_ACCOUNT` | Lacework account name | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

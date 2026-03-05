# @secretdef/maxmind

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MaxMind** environment variables.

## Install

```bash
npm install @secretdef/maxmind secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/maxmind';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAXMIND_ACCOUNT_ID` | MaxMind account ID | Yes |
| `MAXMIND_LICENSE_KEY` | MaxMind license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

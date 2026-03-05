# @secretdef/feedbin

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Feedbin** environment variables.

## Install

```bash
npm install @secretdef/feedbin secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/feedbin';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FEEDBIN_USERNAME` | Feedbin account email | Yes |
| `FEEDBIN_PASSWORD` | Feedbin account password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

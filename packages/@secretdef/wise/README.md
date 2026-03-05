# @secretdef/wise

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wise** environment variables.

## Install

```bash
npm install @secretdef/wise secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wise';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WISE_API_TOKEN` | Wise API token | Yes |
| `WISE_PROFILE_ID` | Wise profile ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/rewardful

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rewardful** environment variables.

## Install

```bash
npm install @secretdef/rewardful secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rewardful';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REWARDFUL_API_SECRET` | Rewardful API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

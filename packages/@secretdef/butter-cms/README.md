# @secretdef/butter-cms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ButterCMS** environment variables.

## Install

```bash
npm install @secretdef/butter-cms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/butter-cms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BUTTER_CMS_API_KEY` | ButterCMS API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

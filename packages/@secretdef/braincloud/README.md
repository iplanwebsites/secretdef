# @secretdef/braincloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **brainCloud** environment variables.

## Install

```bash
npm install @secretdef/braincloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/braincloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BRAINCLOUD_APP_ID` | brainCloud app ID | Yes |
| `BRAINCLOUD_SECRET` | brainCloud app secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

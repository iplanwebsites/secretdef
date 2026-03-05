# @secretdef/adobe-firefly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Adobe Firefly** environment variables.

## Install

```bash
npm install @secretdef/adobe-firefly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/adobe-firefly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ADOBE_CLIENT_ID` | Adobe client ID | Yes |
| `ADOBE_CLIENT_SECRET` | Adobe client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

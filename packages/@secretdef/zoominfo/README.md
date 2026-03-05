# @secretdef/zoominfo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZoomInfo** environment variables.

## Install

```bash
npm install @secretdef/zoominfo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zoominfo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZOOMINFO_CLIENT_ID` | ZoomInfo client ID | Yes |
| `ZOOMINFO_PRIVATE_KEY` | ZoomInfo private key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

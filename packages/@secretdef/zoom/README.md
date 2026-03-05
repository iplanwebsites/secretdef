# @secretdef/zoom

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zoom** environment variables.

## Install

```bash
npm install @secretdef/zoom secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zoom';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZOOM_ACCOUNT_ID` | Zoom account ID | Yes |
| `ZOOM_CLIENT_ID` | Zoom OAuth client ID | Yes |
| `ZOOM_CLIENT_SECRET` | Zoom OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

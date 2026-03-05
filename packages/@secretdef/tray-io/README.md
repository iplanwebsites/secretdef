# @secretdef/tray-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tray.io** environment variables.

## Install

```bash
npm install @secretdef/tray-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tray-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRAY_ACCESS_TOKEN` | Tray.io access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

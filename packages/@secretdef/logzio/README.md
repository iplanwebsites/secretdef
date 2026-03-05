# @secretdef/logzio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Logz.io** environment variables.

## Install

```bash
npm install @secretdef/logzio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/logzio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOGZIO_TOKEN` | Logz.io shipping token | Yes |
| `LOGZIO_REGION` | Logz.io region | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

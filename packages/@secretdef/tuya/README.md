# @secretdef/tuya

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tuya IoT** environment variables.

## Install

```bash
npm install @secretdef/tuya secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tuya';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TUYA_ACCESS_ID` | Tuya IoT access ID | Yes |
| `TUYA_ACCESS_SECRET` | Tuya IoT access secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

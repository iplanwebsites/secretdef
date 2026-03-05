# @secretdef/rowy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rowy** environment variables.

## Install

```bash
npm install @secretdef/rowy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rowy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROWY_SERVICE_ACCOUNT` | Rowy service account JSON (base64) | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/pushover

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pushover** environment variables.

## Install

```bash
npm install @secretdef/pushover secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pushover';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PUSHOVER_TOKEN` | Pushover application token | Yes |
| `PUSHOVER_USER` | Pushover user key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

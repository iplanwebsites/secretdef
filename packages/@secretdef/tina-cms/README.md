# @secretdef/tina-cms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TinaCMS** environment variables.

## Install

```bash
npm install @secretdef/tina-cms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tina-cms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TINA_CLIENT_ID` | TinaCMS client ID | Yes |
| `TINA_TOKEN` | TinaCMS token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

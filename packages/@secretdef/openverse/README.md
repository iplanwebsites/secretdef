# @secretdef/openverse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Openverse** environment variables.

## Install

```bash
npm install @secretdef/openverse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openverse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENVERSE_CLIENT_ID` | Openverse API client ID | Yes |
| `OPENVERSE_CLIENT_SECRET` | Openverse API client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/envoy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Envoy** environment variables.

## Install

```bash
npm install @secretdef/envoy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/envoy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ENVOY_CLIENT_ID` | Envoy OAuth client ID | Yes |
| `ENVOY_CLIENT_SECRET` | Envoy OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

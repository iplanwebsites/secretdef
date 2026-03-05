# @secretdef/marketo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Marketo** environment variables.

## Install

```bash
npm install @secretdef/marketo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/marketo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MARKETO_CLIENT_ID` | Marketo client ID | Yes |
| `MARKETO_CLIENT_SECRET` | Marketo client secret | Yes |
| `MARKETO_REST_ENDPOINT` | Marketo REST endpoint URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/virtru

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Virtru** environment variables.

## Install

```bash
npm install @secretdef/virtru secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/virtru';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VIRTRU_APP_ID` | Virtru application ID | Yes |
| `VIRTRU_CLIENT_ID` | Virtru client ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

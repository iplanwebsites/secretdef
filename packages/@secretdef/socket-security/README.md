# @secretdef/socket-security

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Socket Security** environment variables.

## Install

```bash
npm install @secretdef/socket-security secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/socket-security';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SOCKET_SECURITY_API_KEY` | Socket Security API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

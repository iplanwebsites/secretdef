# @secretdef/socket-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Socket.IO** environment variables.

## Install

```bash
npm install @secretdef/socket-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/socket-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SOCKETIO_SERVER_URL` | Socket.IO server URL | Yes |
| `SOCKETIO_AUTH_TOKEN` | Socket.IO auth token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

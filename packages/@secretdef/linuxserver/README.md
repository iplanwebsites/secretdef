# @secretdef/linuxserver

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LinuxServer.io** environment variables.

## Install

```bash
npm install @secretdef/linuxserver secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/linuxserver';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LSIO_API_KEY` | LinuxServer.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

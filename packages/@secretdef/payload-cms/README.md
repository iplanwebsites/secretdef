# @secretdef/payload-cms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Payload CMS** environment variables.

## Install

```bash
npm install @secretdef/payload-cms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/payload-cms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PAYLOAD_SECRET` | Payload secret key | Yes |
| `PAYLOAD_PUBLIC_SERVER_URL` | Payload public server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

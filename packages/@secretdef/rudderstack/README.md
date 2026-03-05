# @secretdef/rudderstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **RudderStack** environment variables.

## Install

```bash
npm install @secretdef/rudderstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rudderstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RUDDERSTACK_WRITE_KEY` | RudderStack write key | Yes |
| `RUDDERSTACK_DATA_PLANE_URL` | RudderStack data plane URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

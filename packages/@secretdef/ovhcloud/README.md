# @secretdef/ovhcloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OVHcloud** environment variables.

## Install

```bash
npm install @secretdef/ovhcloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ovhcloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OVH_ENDPOINT` | OVHcloud API endpoint | Yes |
| `OVH_APPLICATION_KEY` | OVHcloud application key | Yes |
| `OVH_APPLICATION_SECRET` | OVHcloud application secret | Yes |
| `OVH_CONSUMER_KEY` | OVHcloud consumer key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

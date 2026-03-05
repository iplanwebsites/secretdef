# @secretdef/acrcloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ACRCloud** environment variables.

## Install

```bash
npm install @secretdef/acrcloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/acrcloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ACRCLOUD_ACCESS_KEY` | ACRCloud access key | Yes |
| `ACRCLOUD_ACCESS_SECRET` | ACRCloud access secret | Yes |
| `ACRCLOUD_HOST` | ACRCloud host | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

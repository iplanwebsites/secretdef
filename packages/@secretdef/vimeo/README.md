# @secretdef/vimeo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vimeo** environment variables.

## Install

```bash
npm install @secretdef/vimeo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vimeo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VIMEO_ACCESS_TOKEN` | Vimeo access token | Yes |
| `VIMEO_CLIENT_ID` | Vimeo client ID | No |
| `VIMEO_CLIENT_SECRET` | Vimeo client secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

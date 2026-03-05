# @secretdef/videosdk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **VideoSDK** environment variables.

## Install

```bash
npm install @secretdef/videosdk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/videosdk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VIDEOSDK_API_KEY` | VideoSDK API key | Yes |
| `VIDEOSDK_SECRET_KEY` | VideoSDK secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/imgproxy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **imgproxy** environment variables.

## Install

```bash
npm install @secretdef/imgproxy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/imgproxy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IMGPROXY_KEY` | imgproxy hex-encoded key | Yes |
| `IMGPROXY_SALT` | imgproxy hex-encoded salt | Yes |
| `IMGPROXY_URL` | imgproxy base URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

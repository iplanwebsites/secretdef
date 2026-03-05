# @secretdef/cloudconvert

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **CloudConvert** environment variables.

## Install

```bash
npm install @secretdef/cloudconvert secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cloudconvert';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOUDCONVERT_API_KEY` | CloudConvert API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

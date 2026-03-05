# @secretdef/getstream

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stream (GetStream)** environment variables.

## Install

```bash
npm install @secretdef/getstream secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/getstream';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GETSTREAM_API_KEY` | GetStream API key | Yes |
| `GETSTREAM_API_SECRET` | GetStream API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

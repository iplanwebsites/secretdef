# @secretdef/opensea-stream

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenSea Stream** environment variables.

## Install

```bash
npm install @secretdef/opensea-stream secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/opensea-stream';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENSEA_STREAM_API_KEY` | OpenSea stream API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/youtube

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **YouTube** environment variables.

## Install

```bash
npm install @secretdef/youtube secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/youtube';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `YOUTUBE_API_KEY` | YouTube Data API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

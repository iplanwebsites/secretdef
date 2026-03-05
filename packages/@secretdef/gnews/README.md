# @secretdef/gnews

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GNews** environment variables.

## Install

```bash
npm install @secretdef/gnews secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gnews';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GNEWS_API_KEY` | GNews API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

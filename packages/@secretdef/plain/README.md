# @secretdef/plain

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Plain** environment variables.

## Install

```bash
npm install @secretdef/plain secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/plain';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLAIN_API_KEY` | Plain API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/dub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dub** environment variables.

## Install

```bash
npm install @secretdef/dub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DUB_API_KEY` | Dub API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

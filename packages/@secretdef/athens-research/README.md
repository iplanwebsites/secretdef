# @secretdef/athens-research

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Athens Research** environment variables.

## Install

```bash
npm install @secretdef/athens-research secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/athens-research';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ATHENS_API_KEY` | Athens Research API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

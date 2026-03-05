# @secretdef/cloudsmith

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cloudsmith** environment variables.

## Install

```bash
npm install @secretdef/cloudsmith secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cloudsmith';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOUDSMITH_API_KEY` | Cloudsmith API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

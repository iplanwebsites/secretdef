# @secretdef/baserow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Baserow** environment variables.

## Install

```bash
npm install @secretdef/baserow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/baserow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BASEROW_TOKEN` | Baserow database token | Yes |
| `BASEROW_URL` | Baserow instance URL (self-hosted) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

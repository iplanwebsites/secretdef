# @secretdef/valtown

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Val Town** environment variables.

## Install

```bash
npm install @secretdef/valtown secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/valtown';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VALTOWN_API_TOKEN` | Val Town API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

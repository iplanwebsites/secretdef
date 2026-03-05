# @secretdef/asana

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Asana** environment variables.

## Install

```bash
npm install @secretdef/asana secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/asana';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ASANA_ACCESS_TOKEN` | Asana personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/vapor

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Laravel Vapor** environment variables.

## Install

```bash
npm install @secretdef/vapor secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vapor';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VAPOR_API_TOKEN` | Laravel Vapor API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

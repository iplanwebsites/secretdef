# @secretdef/doofinder

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Doofinder** environment variables.

## Install

```bash
npm install @secretdef/doofinder secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/doofinder';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DOOFINDER_MANAGEMENT_TOKEN` | Doofinder management API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

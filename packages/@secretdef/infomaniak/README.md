# @secretdef/infomaniak

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Infomaniak** environment variables.

## Install

```bash
npm install @secretdef/infomaniak secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/infomaniak';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INFOMANIAK_API_TOKEN` | Infomaniak API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/harbor

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Harbor** environment variables.

## Install

```bash
npm install @secretdef/harbor secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/harbor';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HARBOR_URL` | Harbor registry URL | Yes |
| `HARBOR_USERNAME` | Harbor username | Yes |
| `HARBOR_PASSWORD` | Harbor password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

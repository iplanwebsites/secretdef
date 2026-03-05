# @secretdef/aqua

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aqua Security** environment variables.

## Install

```bash
npm install @secretdef/aqua secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aqua';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AQUA_KEY` | Aqua Security API key | Yes |
| `AQUA_SECRET` | Aqua Security API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

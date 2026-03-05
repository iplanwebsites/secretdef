# @secretdef/beekeeper

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Beekeeper Studio** environment variables.

## Install

```bash
npm install @secretdef/beekeeper secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/beekeeper';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BEEKEEPER_LICENSE_KEY` | Beekeeper Studio license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

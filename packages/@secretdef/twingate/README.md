# @secretdef/twingate

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Twingate** environment variables.

## Install

```bash
npm install @secretdef/twingate secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/twingate';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TWINGATE_API_KEY` | Twingate API key | Yes |
| `TWINGATE_NETWORK` | Twingate network name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

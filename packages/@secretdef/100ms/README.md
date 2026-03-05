# @secretdef/100ms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **100ms** environment variables.

## Install

```bash
npm install @secretdef/100ms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/100ms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HMS_ACCESS_KEY` | 100ms access key | Yes |
| `HMS_SECRET` | 100ms app secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

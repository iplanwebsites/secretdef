# @secretdef/satismeter

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SatisMeter** environment variables.

## Install

```bash
npm install @secretdef/satismeter secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/satismeter';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SATISMETER_WRITE_KEY` | SatisMeter write key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

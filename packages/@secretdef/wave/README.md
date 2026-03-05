# @secretdef/wave

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wave Accounting** environment variables.

## Install

```bash
npm install @secretdef/wave secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wave';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WAVE_ACCESS_TOKEN` | Wave full access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

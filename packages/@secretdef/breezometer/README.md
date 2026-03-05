# @secretdef/breezometer

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BreezoMeter** environment variables.

## Install

```bash
npm install @secretdef/breezometer secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/breezometer';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BREEZOMETER_API_KEY` | BreezoMeter air quality API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

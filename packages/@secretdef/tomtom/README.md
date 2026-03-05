# @secretdef/tomtom

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TomTom** environment variables.

## Install

```bash
npm install @secretdef/tomtom secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tomtom';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TOMTOM_API_KEY` | TomTom API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

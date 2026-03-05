# @secretdef/baremetrics

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Baremetrics** environment variables.

## Install

```bash
npm install @secretdef/baremetrics secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/baremetrics';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BAREMETRICS_API_KEY` | Baremetrics API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

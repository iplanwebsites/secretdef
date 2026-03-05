# @secretdef/black-forest-labs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Black Forest Labs (FLUX)** environment variables.

## Install

```bash
npm install @secretdef/black-forest-labs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/black-forest-labs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BFL_API_KEY` | Black Forest Labs API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

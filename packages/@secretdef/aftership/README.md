# @secretdef/aftership

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AfterShip** environment variables.

## Install

```bash
npm install @secretdef/aftership secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aftership';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AFTERSHIP_API_KEY` | AfterShip API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

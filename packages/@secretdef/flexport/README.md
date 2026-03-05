# @secretdef/flexport

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Flexport** environment variables.

## Install

```bash
npm install @secretdef/flexport secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/flexport';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FLEXPORT_API_KEY` | Flexport API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/pennylane

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pennylane** environment variables.

## Install

```bash
npm install @secretdef/pennylane secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pennylane';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PENNYLANE_API_KEY` | Pennylane API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

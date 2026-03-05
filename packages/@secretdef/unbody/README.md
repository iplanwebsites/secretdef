# @secretdef/unbody

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Unbody** environment variables.

## Install

```bash
npm install @secretdef/unbody secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/unbody';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UNBODY_API_KEY` | Unbody API key | Yes |
| `UNBODY_PROJECT_ID` | Unbody project ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/plasmic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Plasmic** environment variables.

## Install

```bash
npm install @secretdef/plasmic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/plasmic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLASMIC_PROJECT_ID` | Plasmic project ID | Yes |
| `PLASMIC_TOKEN` | Plasmic API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

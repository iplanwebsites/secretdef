# @secretdef/stepzen

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **StepZen** environment variables.

## Install

```bash
npm install @secretdef/stepzen secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stepzen';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STEPZEN_API_KEY` | StepZen API key | Yes |
| `STEPZEN_ACCOUNT` | StepZen account name | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/crowdin

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Crowdin** environment variables.

## Install

```bash
npm install @secretdef/crowdin secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/crowdin';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CROWDIN_PERSONAL_TOKEN` | Crowdin personal access token | Yes |
| `CROWDIN_PROJECT_ID` | Crowdin project ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

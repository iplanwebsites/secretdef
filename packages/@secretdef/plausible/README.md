# @secretdef/plausible

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Plausible Analytics** environment variables.

## Install

```bash
npm install @secretdef/plausible secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/plausible';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLAUSIBLE_SITE_ID` | Plausible site ID | Yes |
| `PLAUSIBLE_API_KEY` | Plausible API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

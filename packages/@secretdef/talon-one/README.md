# @secretdef/talon-one

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Talon.One** environment variables.

## Install

```bash
npm install @secretdef/talon-one secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/talon-one';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TALONONE_API_KEY` | Talon.One management API key | Yes |
| `TALONONE_BASE_URL` | Talon.One API base URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

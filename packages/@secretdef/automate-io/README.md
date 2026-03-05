# @secretdef/automate-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Automate.io** environment variables.

## Install

```bash
npm install @secretdef/automate-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/automate-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AUTOMATE_API_KEY` | Automate.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

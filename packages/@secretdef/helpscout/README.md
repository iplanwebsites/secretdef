# @secretdef/helpscout

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Help Scout** environment variables.

## Install

```bash
npm install @secretdef/helpscout secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/helpscout';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HELPSCOUT_API_KEY` | Help Scout API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

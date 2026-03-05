# @secretdef/moesif

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Moesif** environment variables.

## Install

```bash
npm install @secretdef/moesif secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/moesif';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MOESIF_APPLICATION_ID` | Moesif application ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

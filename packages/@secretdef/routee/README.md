# @secretdef/routee

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Routee** environment variables.

## Install

```bash
npm install @secretdef/routee secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/routee';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROUTEE_APPLICATION_ID` | Routee application ID | Yes |
| `ROUTEE_APPLICATION_SECRET` | Routee application secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

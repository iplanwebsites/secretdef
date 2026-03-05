# @secretdef/usabilla

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Usabilla** environment variables.

## Install

```bash
npm install @secretdef/usabilla secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/usabilla';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `USABILLA_ACCESS_KEY` | Usabilla access key | Yes |
| `USABILLA_SECRET_KEY` | Usabilla secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

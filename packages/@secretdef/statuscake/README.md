# @secretdef/statuscake

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **StatusCake** environment variables.

## Install

```bash
npm install @secretdef/statuscake secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/statuscake';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STATUSCAKE_API_TOKEN` | StatusCake API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

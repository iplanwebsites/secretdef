# @secretdef/heroku

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Heroku** environment variables.

## Install

```bash
npm install @secretdef/heroku secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/heroku';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HEROKU_API_KEY` | Heroku API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

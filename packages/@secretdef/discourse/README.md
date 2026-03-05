# @secretdef/discourse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Discourse** environment variables.

## Install

```bash
npm install @secretdef/discourse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/discourse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DISCOURSE_API_KEY` | Discourse API key | Yes |
| `DISCOURSE_URL` | Discourse forum URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

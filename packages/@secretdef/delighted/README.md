# @secretdef/delighted

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Delighted** environment variables.

## Install

```bash
npm install @secretdef/delighted secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/delighted';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DELIGHTED_API_KEY` | Delighted NPS API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

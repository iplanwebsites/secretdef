# @secretdef/cal-com

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cal.com** environment variables.

## Install

```bash
npm install @secretdef/cal-com secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cal-com';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CAL_API_KEY` | Cal.com API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

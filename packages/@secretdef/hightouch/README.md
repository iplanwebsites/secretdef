# @secretdef/hightouch

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hightouch** environment variables.

## Install

```bash
npm install @secretdef/hightouch secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hightouch';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HIGHTOUCH_API_KEY` | Hightouch API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/upwork

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Upwork** environment variables.

## Install

```bash
npm install @secretdef/upwork secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/upwork';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UPWORK_API_KEY` | Upwork API key | Yes |
| `UPWORK_API_SECRET` | Upwork API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

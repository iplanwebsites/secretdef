# @secretdef/convertkit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ConvertKit** environment variables.

## Install

```bash
npm install @secretdef/convertkit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/convertkit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONVERTKIT_API_KEY` | ConvertKit API key | Yes |
| `CONVERTKIT_API_SECRET` | ConvertKit API secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

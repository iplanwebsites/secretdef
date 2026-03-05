# @secretdef/zapier

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zapier NLA** environment variables.

## Install

```bash
npm install @secretdef/zapier secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zapier';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZAPIER_NLA_API_KEY` | Zapier NLA API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

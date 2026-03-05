# @secretdef/zaprite

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zaprite** environment variables.

## Install

```bash
npm install @secretdef/zaprite secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zaprite';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZAPRITE_API_KEY` | Zaprite API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

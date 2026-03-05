# @secretdef/helicone

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Helicone** environment variables.

## Install

```bash
npm install @secretdef/helicone secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/helicone';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HELICONE_API_KEY` | Helicone API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

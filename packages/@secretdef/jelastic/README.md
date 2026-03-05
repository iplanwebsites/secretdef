# @secretdef/jelastic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Jelastic** environment variables.

## Install

```bash
npm install @secretdef/jelastic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jelastic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JELASTIC_TOKEN` | Jelastic API token | Yes |
| `JELASTIC_URL` | Jelastic platform URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

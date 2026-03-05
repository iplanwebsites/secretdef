# @secretdef/fivetran

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fivetran** environment variables.

## Install

```bash
npm install @secretdef/fivetran secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fivetran';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FIVETRAN_API_KEY` | Fivetran API key | Yes |
| `FIVETRAN_API_SECRET` | Fivetran API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/agendize

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Agendize** environment variables.

## Install

```bash
npm install @secretdef/agendize secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/agendize';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AGENDIZE_API_KEY` | Agendize API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

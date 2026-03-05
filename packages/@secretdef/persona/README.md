# @secretdef/persona

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Persona** environment variables.

## Install

```bash
npm install @secretdef/persona secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/persona';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PERSONA_API_KEY` | Persona API key | Yes |
| `PERSONA_WEBHOOK_SECRET` | Persona webhook secret | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

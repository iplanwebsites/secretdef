# @secretdef/fieldwire

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Fieldwire** environment variables.

## Install

```bash
npm install @secretdef/fieldwire secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/fieldwire';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FIELDWIRE_API_TOKEN` | Fieldwire API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

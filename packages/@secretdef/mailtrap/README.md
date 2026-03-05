# @secretdef/mailtrap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mailtrap** environment variables.

## Install

```bash
npm install @secretdef/mailtrap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mailtrap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MAILTRAP_API_TOKEN` | Mailtrap API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/codacy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Codacy** environment variables.

## Install

```bash
npm install @secretdef/codacy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/codacy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CODACY_API_TOKEN` | Codacy API token | Yes |
| `CODACY_PROJECT_TOKEN` | Codacy project token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

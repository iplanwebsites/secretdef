# @secretdef/lokalise

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lokalise** environment variables.

## Install

```bash
npm install @secretdef/lokalise secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lokalise';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LOKALISE_API_TOKEN` | Lokalise API token | Yes |
| `LOKALISE_PROJECT_ID` | Lokalise project ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

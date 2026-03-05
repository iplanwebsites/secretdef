# @secretdef/instana

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Instana** environment variables.

## Install

```bash
npm install @secretdef/instana secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/instana';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INSTANA_AGENT_KEY` | Instana agent key | Yes |
| `INSTANA_API_TOKEN` | Instana REST API token | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

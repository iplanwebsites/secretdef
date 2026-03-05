# @secretdef/atlassian

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Atlassian** environment variables.

## Install

```bash
npm install @secretdef/atlassian secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/atlassian';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ATLASSIAN_API_TOKEN` | Atlassian API token | Yes |
| `ATLASSIAN_EMAIL` | Atlassian account email | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

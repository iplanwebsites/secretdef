# @secretdef/gitbook

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GitBook** environment variables.

## Install

```bash
npm install @secretdef/gitbook secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gitbook';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GITBOOK_API_TOKEN` | GitBook API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

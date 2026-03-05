# @secretdef/codespaces

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GitHub Codespaces** environment variables.

## Install

```bash
npm install @secretdef/codespaces secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/codespaces';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CODESPACES_TOKEN` | Codespaces access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

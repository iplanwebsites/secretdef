# @secretdef/gitea

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gitea** environment variables.

## Install

```bash
npm install @secretdef/gitea secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gitea';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GITEA_TOKEN` | Gitea personal access token | Yes |
| `GITEA_URL` | Gitea instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

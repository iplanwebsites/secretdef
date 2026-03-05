# @secretdef/workspace-one

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **VMware Workspace ONE** environment variables.

## Install

```bash
npm install @secretdef/workspace-one secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/workspace-one';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WS1_API_KEY` | Workspace ONE UEM API key | Yes |
| `WS1_API_URL` | Workspace ONE API URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

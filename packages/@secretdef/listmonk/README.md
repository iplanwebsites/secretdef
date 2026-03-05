# @secretdef/listmonk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Listmonk** environment variables.

## Install

```bash
npm install @secretdef/listmonk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/listmonk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LISTMONK_URL` | Listmonk instance URL | Yes |
| `LISTMONK_USERNAME` | Listmonk admin username | Yes |
| `LISTMONK_PASSWORD` | Listmonk admin password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

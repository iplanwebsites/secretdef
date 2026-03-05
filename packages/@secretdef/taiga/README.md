# @secretdef/taiga

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Taiga** environment variables.

## Install

```bash
npm install @secretdef/taiga secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/taiga';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TAIGA_URL` | Taiga instance URL | Yes |
| `TAIGA_AUTH_TOKEN` | Taiga auth token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/remote

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Remote.com** environment variables.

## Install

```bash
npm install @secretdef/remote secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/remote';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REMOTE_API_TOKEN` | Remote.com API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

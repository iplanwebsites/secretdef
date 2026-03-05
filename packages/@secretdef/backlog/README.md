# @secretdef/backlog

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Backlog** environment variables.

## Install

```bash
npm install @secretdef/backlog secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/backlog';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BACKLOG_API_KEY` | Backlog API key | Yes |
| `BACKLOG_SPACE_KEY` | Backlog space key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

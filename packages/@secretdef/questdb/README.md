# @secretdef/questdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **QuestDB** environment variables.

## Install

```bash
npm install @secretdef/questdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/questdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `QUESTDB_HOST` | QuestDB host | Yes |
| `QUESTDB_PORT` | QuestDB port | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

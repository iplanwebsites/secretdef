# @secretdef/todoist

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Todoist** environment variables.

## Install

```bash
npm install @secretdef/todoist secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/todoist';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TODOIST_API_KEY` | Todoist API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

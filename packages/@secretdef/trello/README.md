# @secretdef/trello

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Trello** environment variables.

## Install

```bash
npm install @secretdef/trello secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/trello';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRELLO_API_KEY` | Trello API key | Yes |
| `TRELLO_TOKEN` | Trello API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

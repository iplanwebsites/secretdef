# @secretdef/devrev

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DevRev** environment variables.

## Install

```bash
npm install @secretdef/devrev secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/devrev';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEVREV_PAT` | DevRev personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

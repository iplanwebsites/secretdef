# @secretdef/reviewboard

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Review Board** environment variables.

## Install

```bash
npm install @secretdef/reviewboard secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/reviewboard';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `REVIEWBOARD_URL` | Review Board server URL | Yes |
| `REVIEWBOARD_API_TOKEN` | Review Board API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

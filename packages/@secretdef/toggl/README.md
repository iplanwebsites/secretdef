# @secretdef/toggl

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Toggl Track** environment variables.

## Install

```bash
npm install @secretdef/toggl secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/toggl';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TOGGL_API_TOKEN` | Toggl Track API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

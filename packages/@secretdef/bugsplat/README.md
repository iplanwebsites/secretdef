# @secretdef/bugsplat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BugSplat** environment variables.

## Install

```bash
npm install @secretdef/bugsplat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bugsplat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BUGSPLAT_CLIENT_ID` | BugSplat OAuth client ID | Yes |
| `BUGSPLAT_CLIENT_SECRET` | BugSplat OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

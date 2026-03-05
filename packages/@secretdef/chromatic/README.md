# @secretdef/chromatic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Chromatic** environment variables.

## Install

```bash
npm install @secretdef/chromatic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chromatic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHROMATIC_PROJECT_TOKEN` | Chromatic project token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

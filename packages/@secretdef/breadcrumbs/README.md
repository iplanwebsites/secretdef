# @secretdef/breadcrumbs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Breadcrumbs** environment variables.

## Install

```bash
npm install @secretdef/breadcrumbs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/breadcrumbs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BREADCRUMBS_API_KEY` | Breadcrumbs lead scoring API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

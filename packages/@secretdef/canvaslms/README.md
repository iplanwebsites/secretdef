# @secretdef/canvaslms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Canvas LMS** environment variables.

## Install

```bash
npm install @secretdef/canvaslms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/canvaslms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CANVAS_API_TOKEN` | Canvas LMS access token | Yes |
| `CANVAS_BASE_URL` | Canvas LMS instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

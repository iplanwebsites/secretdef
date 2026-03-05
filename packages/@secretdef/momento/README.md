# @secretdef/momento

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Momento** environment variables.

## Install

```bash
npm install @secretdef/momento secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/momento';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MOMENTO_AUTH_TOKEN` | Momento auth token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

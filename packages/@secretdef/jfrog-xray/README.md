# @secretdef/jfrog-xray

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **JFrog Xray** environment variables.

## Install

```bash
npm install @secretdef/jfrog-xray secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/jfrog-xray';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `JFROG_URL` | JFrog platform URL | Yes |
| `JFROG_ACCESS_TOKEN` | JFrog access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

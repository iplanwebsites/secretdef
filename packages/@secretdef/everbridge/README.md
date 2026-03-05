# @secretdef/everbridge

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Everbridge** environment variables.

## Install

```bash
npm install @secretdef/everbridge secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/everbridge';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EVERBRIDGE_USERNAME` | Everbridge API username | Yes |
| `EVERBRIDGE_PASSWORD` | Everbridge API password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

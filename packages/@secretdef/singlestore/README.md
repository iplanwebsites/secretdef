# @secretdef/singlestore

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SingleStore** environment variables.

## Install

```bash
npm install @secretdef/singlestore secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/singlestore';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SINGLESTORE_HOST` | SingleStore host | Yes |
| `SINGLESTORE_USER` | SingleStore username | Yes |
| `SINGLESTORE_PASSWORD` | SingleStore password | Yes |
| `SINGLESTORE_DATABASE` | SingleStore database name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

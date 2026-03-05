# @secretdef/stardog

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Stardog** environment variables.

## Install

```bash
npm install @secretdef/stardog secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stardog';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STARDOG_URL` | Stardog server URL | Yes |
| `STARDOG_USERNAME` | Stardog username | Yes |
| `STARDOG_PASSWORD` | Stardog password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

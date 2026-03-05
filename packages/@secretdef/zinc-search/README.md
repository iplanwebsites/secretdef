# @secretdef/zinc-search

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ZincSearch** environment variables.

## Install

```bash
npm install @secretdef/zinc-search secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zinc-search';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZINC_HOST` | ZincSearch host URL | Yes |
| `ZINC_USER` | ZincSearch admin username | Yes |
| `ZINC_PASSWORD` | ZincSearch admin password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

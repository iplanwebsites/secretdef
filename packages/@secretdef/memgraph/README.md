# @secretdef/memgraph

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Memgraph** environment variables.

## Install

```bash
npm install @secretdef/memgraph secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/memgraph';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEMGRAPH_HOST` | Memgraph host | Yes |
| `MEMGRAPH_PORT` | Memgraph port | No |
| `MEMGRAPH_USERNAME` | Memgraph username | No |
| `MEMGRAPH_PASSWORD` | Memgraph password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

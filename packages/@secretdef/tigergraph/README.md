# @secretdef/tigergraph

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TigerGraph** environment variables.

## Install

```bash
npm install @secretdef/tigergraph secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tigergraph';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TIGERGRAPH_HOST` | TigerGraph host | Yes |
| `TIGERGRAPH_USERNAME` | TigerGraph username | Yes |
| `TIGERGRAPH_PASSWORD` | TigerGraph password | Yes |
| `TIGERGRAPH_GRAPH` | TigerGraph graph name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

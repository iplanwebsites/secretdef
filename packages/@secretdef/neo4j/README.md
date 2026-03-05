# @secretdef/neo4j

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Neo4j** environment variables.

## Install

```bash
npm install @secretdef/neo4j secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/neo4j';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NEO4J_URI` | Neo4j connection URI | Yes |
| `NEO4J_USERNAME` | Neo4j username | Yes |
| `NEO4J_PASSWORD` | Neo4j password | Yes |
| `NEO4J_DATABASE` | Neo4j database name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

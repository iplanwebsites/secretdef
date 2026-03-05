# @secretdef/osquery

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **osquery/Fleet** environment variables.

## Install

```bash
npm install @secretdef/osquery secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/osquery';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FLEET_API_TOKEN` | Fleet (osquery) API token | Yes |
| `FLEET_URL` | Fleet server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

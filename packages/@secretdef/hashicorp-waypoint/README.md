# @secretdef/hashicorp-waypoint

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HashiCorp Waypoint** environment variables.

## Install

```bash
npm install @secretdef/hashicorp-waypoint secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hashicorp-waypoint';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WAYPOINT_TOKEN` | Waypoint auth token | Yes |
| `WAYPOINT_SERVER_ADDR` | Waypoint server address | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

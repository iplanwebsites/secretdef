# @secretdef/drone

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Drone CI** environment variables.

## Install

```bash
npm install @secretdef/drone secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/drone';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DRONE_SERVER` | Drone CI server URL | Yes |
| `DRONE_TOKEN` | Drone CI API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

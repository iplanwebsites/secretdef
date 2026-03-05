# @secretdef/orbit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Orbit (Community)** environment variables.

## Install

```bash
npm install @secretdef/orbit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/orbit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ORBIT_API_KEY` | Orbit community API key | Yes |
| `ORBIT_WORKSPACE_ID` | Orbit workspace ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

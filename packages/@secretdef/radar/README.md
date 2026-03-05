# @secretdef/radar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Radar** environment variables.

## Install

```bash
npm install @secretdef/radar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/radar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RADAR_SECRET_KEY` | Radar server secret key | Yes |
| `RADAR_PUBLISHABLE_KEY` | Radar publishable key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

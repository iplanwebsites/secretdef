# @secretdef/strava

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Strava** environment variables.

## Install

```bash
npm install @secretdef/strava secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/strava';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STRAVA_CLIENT_ID` | Strava API client ID | Yes |
| `STRAVA_CLIENT_SECRET` | Strava API client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

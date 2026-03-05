# @secretdef/amadeus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Amadeus** environment variables.

## Install

```bash
npm install @secretdef/amadeus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amadeus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AMADEUS_CLIENT_ID` | Amadeus API client ID | Yes |
| `AMADEUS_CLIENT_SECRET` | Amadeus API client secret | Yes |
| `AMADEUS_HOSTNAME` | Amadeus API hostname (test or production) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

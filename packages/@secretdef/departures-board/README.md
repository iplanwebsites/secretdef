# @secretdef/departures-board

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Transport API** environment variables.

## Install

```bash
npm install @secretdef/departures-board secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/departures-board';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRANSPORT_API_ID` | Transport API app ID | Yes |
| `TRANSPORT_API_KEY` | Transport API app key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

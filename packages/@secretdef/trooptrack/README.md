# @secretdef/trooptrack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TroopTrack** environment variables.

## Install

```bash
npm install @secretdef/trooptrack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/trooptrack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TROOPTRACK_API_KEY` | TroopTrack API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

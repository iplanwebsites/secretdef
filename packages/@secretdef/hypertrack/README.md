# @secretdef/hypertrack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HyperTrack** environment variables.

## Install

```bash
npm install @secretdef/hypertrack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hypertrack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HYPERTRACK_ACCOUNT_ID` | HyperTrack account ID | Yes |
| `HYPERTRACK_SECRET_KEY` | HyperTrack secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

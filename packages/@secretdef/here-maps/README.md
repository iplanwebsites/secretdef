# @secretdef/here-maps

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HERE Maps** environment variables.

## Install

```bash
npm install @secretdef/here-maps secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/here-maps';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HERE_API_KEY` | HERE Maps API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

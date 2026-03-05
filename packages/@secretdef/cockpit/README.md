# @secretdef/cockpit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cockpit CMS** environment variables.

## Install

```bash
npm install @secretdef/cockpit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cockpit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COCKPIT_API_TOKEN` | Cockpit CMS API token | Yes |
| `COCKPIT_URL` | Cockpit CMS instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

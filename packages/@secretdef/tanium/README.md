# @secretdef/tanium

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tanium** environment variables.

## Install

```bash
npm install @secretdef/tanium secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tanium';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TANIUM_API_TOKEN` | Tanium API token | Yes |
| `TANIUM_URL` | Tanium server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/wealthsimple

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wealthsimple** environment variables.

## Install

```bash
npm install @secretdef/wealthsimple secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wealthsimple';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WEALTHSIMPLE_CLIENT_ID` | Wealthsimple client ID | Yes |
| `WEALTHSIMPLE_CLIENT_SECRET` | Wealthsimple client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

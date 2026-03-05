# @secretdef/artsy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Artsy** environment variables.

## Install

```bash
npm install @secretdef/artsy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/artsy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ARTSY_CLIENT_ID` | Artsy API client ID | Yes |
| `ARTSY_CLIENT_SECRET` | Artsy API client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

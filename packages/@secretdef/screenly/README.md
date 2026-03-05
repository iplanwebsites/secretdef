# @secretdef/screenly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Screenly** environment variables.

## Install

```bash
npm install @secretdef/screenly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/screenly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SCREENLY_API_KEY` | Screenly API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

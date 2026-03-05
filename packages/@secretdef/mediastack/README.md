# @secretdef/mediastack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mediastack** environment variables.

## Install

```bash
npm install @secretdef/mediastack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mediastack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEDIASTACK_API_KEY` | Mediastack API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

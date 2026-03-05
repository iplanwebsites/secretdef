# @secretdef/bosun

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bosun** environment variables.

## Install

```bash
npm install @secretdef/bosun secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bosun';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOSUN_URL` | Bosun server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

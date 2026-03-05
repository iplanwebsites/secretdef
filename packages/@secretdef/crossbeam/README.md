# @secretdef/crossbeam

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Crossbeam** environment variables.

## Install

```bash
npm install @secretdef/crossbeam secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/crossbeam';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CROSSBEAM_API_KEY` | Crossbeam API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

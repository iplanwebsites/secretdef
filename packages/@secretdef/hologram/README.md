# @secretdef/hologram

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hologram** environment variables.

## Install

```bash
npm install @secretdef/hologram secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hologram';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HOLOGRAM_API_KEY` | Hologram IoT API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

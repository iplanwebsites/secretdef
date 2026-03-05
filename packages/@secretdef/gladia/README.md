# @secretdef/gladia

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gladia** environment variables.

## Install

```bash
npm install @secretdef/gladia secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gladia';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GLADIA_API_KEY` | Gladia transcription API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

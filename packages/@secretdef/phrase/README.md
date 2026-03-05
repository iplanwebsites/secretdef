# @secretdef/phrase

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Phrase** environment variables.

## Install

```bash
npm install @secretdef/phrase secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/phrase';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PHRASE_ACCESS_TOKEN` | Phrase access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

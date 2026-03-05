# @secretdef/speechmatics

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Speechmatics** environment variables.

## Install

```bash
npm install @secretdef/speechmatics secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/speechmatics';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPEECHMATICS_API_KEY` | Speechmatics API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

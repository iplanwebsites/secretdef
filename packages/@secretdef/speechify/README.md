# @secretdef/speechify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Speechify** environment variables.

## Install

```bash
npm install @secretdef/speechify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/speechify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPEECHIFY_API_KEY` | Speechify API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

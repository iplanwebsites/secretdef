# @secretdef/ideogram

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ideogram** environment variables.

## Install

```bash
npm install @secretdef/ideogram secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ideogram';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IDEOGRAM_API_KEY` | Ideogram API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

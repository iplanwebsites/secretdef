# @secretdef/dialpad

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dialpad** environment variables.

## Install

```bash
npm install @secretdef/dialpad secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/dialpad';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DIALPAD_API_KEY` | Dialpad API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

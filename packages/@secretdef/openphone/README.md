# @secretdef/openphone

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenPhone** environment variables.

## Install

```bash
npm install @secretdef/openphone secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openphone';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENPHONE_API_KEY` | OpenPhone API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

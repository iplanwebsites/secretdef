# @secretdef/audd

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AudD** environment variables.

## Install

```bash
npm install @secretdef/audd secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/audd';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AUDD_API_TOKEN` | AudD music recognition API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

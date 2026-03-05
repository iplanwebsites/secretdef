# @secretdef/iugu

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Iugu** environment variables.

## Install

```bash
npm install @secretdef/iugu secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/iugu';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IUGU_API_TOKEN` | Iugu API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

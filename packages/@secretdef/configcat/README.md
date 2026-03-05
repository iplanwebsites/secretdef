# @secretdef/configcat

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ConfigCat** environment variables.

## Install

```bash
npm install @secretdef/configcat secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/configcat';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONFIGCAT_SDK_KEY` | ConfigCat SDK key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

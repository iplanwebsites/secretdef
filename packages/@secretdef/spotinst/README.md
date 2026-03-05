# @secretdef/spotinst

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Spot by NetApp** environment variables.

## Install

```bash
npm install @secretdef/spotinst secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/spotinst';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPOTINST_TOKEN` | Spot by NetApp API token | Yes |
| `SPOTINST_ACCOUNT` | Spot account ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

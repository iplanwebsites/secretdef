# @secretdef/vwo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **VWO** environment variables.

## Install

```bash
npm install @secretdef/vwo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vwo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VWO_ACCOUNT_ID` | VWO account ID | Yes |
| `VWO_SDK_KEY` | VWO SDK key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

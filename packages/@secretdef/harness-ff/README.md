# @secretdef/harness-ff

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Harness Feature Flags** environment variables.

## Install

```bash
npm install @secretdef/harness-ff secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/harness-ff';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HARNESS_SDK_KEY` | Harness Feature Flags SDK key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

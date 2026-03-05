# @secretdef/stepfunctions

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS Step Functions** environment variables.

## Install

```bash
npm install @secretdef/stepfunctions secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stepfunctions';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STEP_FUNCTIONS_REGION` | AWS Step Functions region | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

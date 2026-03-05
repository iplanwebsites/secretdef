# @secretdef/aws-amplify

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS Amplify** environment variables.

## Install

```bash
npm install @secretdef/aws-amplify secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aws-amplify';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AMPLIFY_APP_ID` | AWS Amplify app ID | Yes |
| `AMPLIFY_BRANCH` | AWS Amplify branch | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

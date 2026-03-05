# @secretdef/amazon-sns

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Amazon SNS** environment variables.

## Install

```bash
npm install @secretdef/amazon-sns secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amazon-sns';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AWS_SNS_TOPIC_ARN` | SNS topic ARN | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key ID for SNS | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key for SNS | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

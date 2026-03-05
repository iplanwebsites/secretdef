# @secretdef/amazon-sqs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Amazon SQS** environment variables.

## Install

```bash
npm install @secretdef/amazon-sqs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amazon-sqs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AWS_SQS_QUEUE_URL` | SQS queue URL | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key ID for SQS | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key for SQS | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

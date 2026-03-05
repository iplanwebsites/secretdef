# @secretdef/aws-bedrock

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS Bedrock** environment variables.

## Install

```bash
npm install @secretdef/aws-bedrock secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aws-bedrock';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AWS_ACCESS_KEY_ID` | AWS access key ID | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key | Yes |
| `AWS_BEDROCK_REGION` | AWS region for Bedrock | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

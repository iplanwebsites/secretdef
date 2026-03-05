# @secretdef/amazon-ses

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Amazon SES** environment variables.

## Install

```bash
npm install @secretdef/amazon-ses secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amazon-ses';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AWS_ACCESS_KEY_ID` | AWS access key ID for SES | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key for SES | Yes |
| `AWS_SES_REGION` | AWS region for SES | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

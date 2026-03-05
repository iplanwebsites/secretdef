# @secretdef/aws-route53

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS Route 53** environment variables.

## Install

```bash
npm install @secretdef/aws-route53 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aws-route53';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AWS_ROUTE53_HOSTED_ZONE_ID` | Route 53 hosted zone ID | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key ID for Route 53 | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key for Route 53 | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

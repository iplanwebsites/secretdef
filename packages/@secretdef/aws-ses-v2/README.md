# @secretdef/aws-ses-v2

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS SES v2** environment variables.

## Install

```bash
npm install @secretdef/aws-ses-v2 secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aws-ses-v2';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SES_REGION` | AWS SES region | Yes |
| `SES_FROM_EMAIL` | Default sender email for SES | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

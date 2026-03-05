# @secretdef/aws-iot-core

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AWS IoT Core** environment variables.

## Install

```bash
npm install @secretdef/aws-iot-core secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aws-iot-core';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AWS_IOT_ENDPOINT` | AWS IoT endpoint | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key ID for IoT | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret access key for IoT | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

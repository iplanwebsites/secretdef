# @secretdef/upstash-kafka

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Upstash Kafka** environment variables.

## Install

```bash
npm install @secretdef/upstash-kafka secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/upstash-kafka';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UPSTASH_KAFKA_REST_URL` | Upstash Kafka REST URL | Yes |
| `UPSTASH_KAFKA_REST_USERNAME` | Upstash Kafka REST username | Yes |
| `UPSTASH_KAFKA_REST_PASSWORD` | Upstash Kafka REST password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

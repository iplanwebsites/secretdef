# @secretdef/confluent-kafka

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Confluent Kafka** environment variables.

## Install

```bash
npm install @secretdef/confluent-kafka secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/confluent-kafka';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONFLUENT_BOOTSTRAP_SERVERS` | Confluent Kafka bootstrap servers | Yes |
| `CONFLUENT_API_KEY` | Confluent Cloud API key | Yes |
| `CONFLUENT_API_SECRET` | Confluent Cloud API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

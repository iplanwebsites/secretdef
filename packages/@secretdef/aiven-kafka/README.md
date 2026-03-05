# @secretdef/aiven-kafka

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aiven for Apache Kafka** environment variables.

## Install

```bash
npm install @secretdef/aiven-kafka secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aiven-kafka';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIVEN_KAFKA_URI` | Aiven Kafka connection URI | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

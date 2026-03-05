# @secretdef/mqtt

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MQTT** environment variables.

## Install

```bash
npm install @secretdef/mqtt secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mqtt';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MQTT_BROKER_URL` | MQTT broker URL | Yes |
| `MQTT_USERNAME` | MQTT broker username | No |
| `MQTT_PASSWORD` | MQTT broker password | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

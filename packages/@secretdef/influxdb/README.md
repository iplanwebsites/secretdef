# @secretdef/influxdb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **InfluxDB** environment variables.

## Install

```bash
npm install @secretdef/influxdb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/influxdb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INFLUXDB_URL` | InfluxDB URL | Yes |
| `INFLUXDB_TOKEN` | InfluxDB API token | Yes |
| `INFLUXDB_ORG` | InfluxDB organization | No |
| `INFLUXDB_BUCKET` | InfluxDB bucket name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

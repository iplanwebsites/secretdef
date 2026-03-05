# @secretdef/weatherapi

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WeatherAPI** environment variables.

## Install

```bash
npm install @secretdef/weatherapi secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/weatherapi';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WEATHERAPI_KEY` | WeatherAPI key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

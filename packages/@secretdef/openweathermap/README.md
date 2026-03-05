# @secretdef/openweathermap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenWeatherMap** environment variables.

## Install

```bash
npm install @secretdef/openweathermap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openweathermap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENWEATHER_API_KEY` | OpenWeatherMap API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

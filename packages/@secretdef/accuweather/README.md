# @secretdef/accuweather

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **AccuWeather** environment variables.

## Install

```bash
npm install @secretdef/accuweather secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/accuweather';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ACCUWEATHER_API_KEY` | AccuWeather API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/airvisual

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **IQAir AirVisual** environment variables.

## Install

```bash
npm install @secretdef/airvisual secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/airvisual';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIRVISUAL_API_KEY` | IQAir AirVisual API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

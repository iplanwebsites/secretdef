# @secretdef/wakatime

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WakaTime** environment variables.

## Install

```bash
npm install @secretdef/wakatime secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wakatime';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WAKATIME_API_KEY` | WakaTime API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

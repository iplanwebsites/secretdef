# @secretdef/uptimerobot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **UptimeRobot** environment variables.

## Install

```bash
npm install @secretdef/uptimerobot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/uptimerobot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UPTIMEROBOT_API_KEY` | UptimeRobot API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

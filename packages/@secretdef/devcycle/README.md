# @secretdef/devcycle

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DevCycle** environment variables.

## Install

```bash
npm install @secretdef/devcycle secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/devcycle';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DEVCYCLE_SERVER_SDK_KEY` | DevCycle server SDK key | Yes |
| `DEVCYCLE_CLIENT_SDK_KEY` | DevCycle client SDK key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

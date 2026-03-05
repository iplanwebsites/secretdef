# @secretdef/liveagent

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LiveAgent** environment variables.

## Install

```bash
npm install @secretdef/liveagent secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/liveagent';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LIVEAGENT_API_KEY` | LiveAgent API key | Yes |
| `LIVEAGENT_DOMAIN` | LiveAgent domain | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/heroic-labs-nakama

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Heroic Labs Nakama** environment variables.

## Install

```bash
npm install @secretdef/heroic-labs-nakama secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/heroic-labs-nakama';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NAKAMA_SERVER_KEY` | Nakama server key | Yes |
| `NAKAMA_HOST` | Nakama server host | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

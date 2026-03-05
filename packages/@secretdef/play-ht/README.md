# @secretdef/play-ht

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **PlayHT** environment variables.

## Install

```bash
npm install @secretdef/play-ht secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/play-ht';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLAY_HT_API_KEY` | PlayHT API key | Yes |
| `PLAY_HT_USER_ID` | PlayHT user ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

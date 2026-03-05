# @secretdef/messagebird

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **MessageBird (Bird)** environment variables.

## Install

```bash
npm install @secretdef/messagebird secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/messagebird';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MESSAGEBIRD_API_KEY` | MessageBird API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

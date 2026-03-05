# @secretdef/yousign

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Yousign** environment variables.

## Install

```bash
npm install @secretdef/yousign secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/yousign';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `YOUSIGN_API_KEY` | Yousign API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/typebot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Typebot** environment variables.

## Install

```bash
npm install @secretdef/typebot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/typebot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TYPEBOT_TOKEN` | Typebot API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

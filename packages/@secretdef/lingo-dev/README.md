# @secretdef/lingo-dev

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lingo.dev** environment variables.

## Install

```bash
npm install @secretdef/lingo-dev secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lingo-dev';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LINGO_API_KEY` | Lingo.dev API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

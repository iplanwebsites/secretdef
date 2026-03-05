# @secretdef/stackhawk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **StackHawk** environment variables.

## Install

```bash
npm install @secretdef/stackhawk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/stackhawk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HAWK_API_KEY` | StackHawk API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

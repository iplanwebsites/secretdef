# @secretdef/woodpecker

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Woodpecker CI** environment variables.

## Install

```bash
npm install @secretdef/woodpecker secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/woodpecker';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WOODPECKER_TOKEN` | Woodpecker CI API token | Yes |
| `WOODPECKER_SERVER` | Woodpecker CI server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

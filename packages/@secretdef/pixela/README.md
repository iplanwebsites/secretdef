# @secretdef/pixela

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pixela** environment variables.

## Install

```bash
npm install @secretdef/pixela secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pixela';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PIXELA_USERNAME` | Pixela username | Yes |
| `PIXELA_TOKEN` | Pixela token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

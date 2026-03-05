# @secretdef/aikido

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Aikido Security** environment variables.

## Install

```bash
npm install @secretdef/aikido secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/aikido';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AIKIDO_TOKEN` | Aikido Security token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

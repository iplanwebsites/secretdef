# @secretdef/platform-sh

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Platform.sh** environment variables.

## Install

```bash
npm install @secretdef/platform-sh secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/platform-sh';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PLATFORMSH_CLI_TOKEN` | Platform.sh CLI token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/zammad

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Zammad** environment variables.

## Install

```bash
npm install @secretdef/zammad secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/zammad';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ZAMMAD_URL` | Zammad instance URL | Yes |
| `ZAMMAD_TOKEN` | Zammad API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/gumroad

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Gumroad** environment variables.

## Install

```bash
npm install @secretdef/gumroad secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gumroad';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GUMROAD_ACCESS_TOKEN` | Gumroad access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

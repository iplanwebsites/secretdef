# @secretdef/mondoo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mondoo** environment variables.

## Install

```bash
npm install @secretdef/mondoo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mondoo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MONDOO_CONFIG_BASE64` | Mondoo config (base64) | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

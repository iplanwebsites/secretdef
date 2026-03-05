# @secretdef/ecwid

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ecwid** environment variables.

## Install

```bash
npm install @secretdef/ecwid secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ecwid';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ECWID_STORE_ID` | Ecwid store ID | Yes |
| `ECWID_SECRET_TOKEN` | Ecwid secret API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

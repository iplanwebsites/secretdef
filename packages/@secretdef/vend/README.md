# @secretdef/vend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Vend (Lightspeed X)** environment variables.

## Install

```bash
npm install @secretdef/vend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/vend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VEND_API_TOKEN` | Vend personal token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

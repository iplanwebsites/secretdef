# @secretdef/kit

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Kit (ConvertKit)** environment variables.

## Install

```bash
npm install @secretdef/kit secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/kit';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KIT_API_SECRET` | Kit (ConvertKit) API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

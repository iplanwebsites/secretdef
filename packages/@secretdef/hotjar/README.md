# @secretdef/hotjar

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hotjar** environment variables.

## Install

```bash
npm install @secretdef/hotjar secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hotjar';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HOTJAR_SITE_ID` | Hotjar site ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

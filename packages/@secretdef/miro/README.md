# @secretdef/miro

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Miro** environment variables.

## Install

```bash
npm install @secretdef/miro secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/miro';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MIRO_ACCESS_TOKEN` | Miro access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

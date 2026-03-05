# @secretdef/wolfram

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Wolfram Alpha** environment variables.

## Install

```bash
npm install @secretdef/wolfram secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wolfram';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WOLFRAM_APP_ID` | Wolfram Alpha app ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

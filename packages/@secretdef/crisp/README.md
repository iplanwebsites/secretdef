# @secretdef/crisp

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Crisp** environment variables.

## Install

```bash
npm install @secretdef/crisp secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/crisp';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CRISP_IDENTIFIER` | Crisp token identifier | Yes |
| `CRISP_KEY` | Crisp token key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/enzuzo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Enzuzo** environment variables.

## Install

```bash
npm install @secretdef/enzuzo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/enzuzo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ENZUZO_API_KEY` | Enzuzo API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

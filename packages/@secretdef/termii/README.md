# @secretdef/termii

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Termii** environment variables.

## Install

```bash
npm install @secretdef/termii secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/termii';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TERMII_API_KEY` | Termii API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/semrush

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Semrush** environment variables.

## Install

```bash
npm install @secretdef/semrush secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/semrush';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SEMRUSH_API_KEY` | Semrush API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

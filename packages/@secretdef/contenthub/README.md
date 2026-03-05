# @secretdef/contenthub

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ContentHub** environment variables.

## Install

```bash
npm install @secretdef/contenthub secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/contenthub';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONTENTHUB_API_KEY` | ContentHub API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

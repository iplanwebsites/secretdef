# @secretdef/rootly

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rootly** environment variables.

## Install

```bash
npm install @secretdef/rootly secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rootly';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROOTLY_API_KEY` | Rootly API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

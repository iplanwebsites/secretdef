# @secretdef/what3words

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **what3words** environment variables.

## Install

```bash
npm install @secretdef/what3words secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/what3words';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `W3W_API_KEY` | what3words API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

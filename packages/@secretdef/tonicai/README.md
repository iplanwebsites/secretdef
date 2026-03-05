# @secretdef/tonicai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tonic.ai** environment variables.

## Install

```bash
npm install @secretdef/tonicai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tonicai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TONIC_API_KEY` | Tonic.ai API key | Yes |
| `TONIC_URL` | Tonic.ai instance URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

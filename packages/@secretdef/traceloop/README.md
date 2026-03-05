# @secretdef/traceloop

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Traceloop** environment variables.

## Install

```bash
npm install @secretdef/traceloop secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/traceloop';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRACELOOP_API_KEY` | Traceloop API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

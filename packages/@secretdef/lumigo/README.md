# @secretdef/lumigo

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lumigo** environment variables.

## Install

```bash
npm install @secretdef/lumigo secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lumigo';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LUMIGO_TRACER_TOKEN` | Lumigo tracer token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

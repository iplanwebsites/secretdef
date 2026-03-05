# @secretdef/frameio

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Frame.io** environment variables.

## Install

```bash
npm install @secretdef/frameio secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/frameio';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FRAMEIO_TOKEN` | Frame.io developer token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

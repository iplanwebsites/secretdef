# @secretdef/inspectlet

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Inspectlet** environment variables.

## Install

```bash
npm install @secretdef/inspectlet secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/inspectlet';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `INSPECTLET_WID` | Inspectlet website ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/proofpoint

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Proofpoint** environment variables.

## Install

```bash
npm install @secretdef/proofpoint secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/proofpoint';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROOFPOINT_SP` | Proofpoint service principal | Yes |
| `PROOFPOINT_API_KEY` | Proofpoint API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

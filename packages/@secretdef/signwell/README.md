# @secretdef/signwell

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **SignWell** environment variables.

## Install

```bash
npm install @secretdef/signwell secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/signwell';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SIGNWELL_API_KEY` | SignWell API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

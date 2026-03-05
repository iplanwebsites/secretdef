# @secretdef/ory

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ory** environment variables.

## Install

```bash
npm install @secretdef/ory secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ory';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ORY_SDK_URL` | Ory SDK URL | Yes |
| `ORY_API_KEY` | Ory API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

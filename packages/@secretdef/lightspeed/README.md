# @secretdef/lightspeed

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lightspeed** environment variables.

## Install

```bash
npm install @secretdef/lightspeed secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lightspeed';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LIGHTSPEED_API_KEY` | Lightspeed API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

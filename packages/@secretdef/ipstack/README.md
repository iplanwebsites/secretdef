# @secretdef/ipstack

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ipstack** environment variables.

## Install

```bash
npm install @secretdef/ipstack secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ipstack';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IPSTACK_API_KEY` | ipstack API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

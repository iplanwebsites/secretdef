# @secretdef/ipgeolocation

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ipgeolocation** environment variables.

## Install

```bash
npm install @secretdef/ipgeolocation secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ipgeolocation';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IPGEOLOCATION_API_KEY` | ipgeolocation API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

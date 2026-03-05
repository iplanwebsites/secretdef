# @secretdef/apimatic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **APIMatic** environment variables.

## Install

```bash
npm install @secretdef/apimatic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apimatic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APIMATIC_API_KEY` | APIMatic API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

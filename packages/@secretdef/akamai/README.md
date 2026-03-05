# @secretdef/akamai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Akamai** environment variables.

## Install

```bash
npm install @secretdef/akamai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/akamai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AKAMAI_HOST` | Akamai API host | Yes |
| `AKAMAI_CLIENT_TOKEN` | Akamai client token | Yes |
| `AKAMAI_CLIENT_SECRET` | Akamai client secret | Yes |
| `AKAMAI_ACCESS_TOKEN` | Akamai access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

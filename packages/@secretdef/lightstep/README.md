# @secretdef/lightstep

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Lightstep/ServiceNow Observability** environment variables.

## Install

```bash
npm install @secretdef/lightstep secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/lightstep';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LIGHTSTEP_ACCESS_TOKEN` | Lightstep access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

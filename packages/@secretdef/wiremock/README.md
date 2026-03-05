# @secretdef/wiremock

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WireMock Cloud** environment variables.

## Install

```bash
npm install @secretdef/wiremock secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wiremock';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WIREMOCK_CLOUD_TOKEN` | WireMock Cloud API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

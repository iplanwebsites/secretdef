# @secretdef/apollo-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apollo.io** environment variables.

## Install

```bash
npm install @secretdef/apollo-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/apollo-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `APOLLO_API_KEY` | Apollo.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

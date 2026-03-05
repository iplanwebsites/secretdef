# @secretdef/split-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Split.io** environment variables.

## Install

```bash
npm install @secretdef/split-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/split-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SPLIT_IO_API_KEY` | Split.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

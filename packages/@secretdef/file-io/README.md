# @secretdef/file-io

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **File.io** environment variables.

## Install

```bash
npm install @secretdef/file-io secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/file-io';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FILEIO_API_KEY` | File.io API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

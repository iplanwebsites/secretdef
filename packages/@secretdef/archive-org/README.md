# @secretdef/archive-org

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Archive.org** environment variables.

## Install

```bash
npm install @secretdef/archive-org secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/archive-org';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ARCHIVE_S3_ACCESS` | Archive.org S3-like access key | Yes |
| `ARCHIVE_S3_SECRET` | Archive.org S3-like secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

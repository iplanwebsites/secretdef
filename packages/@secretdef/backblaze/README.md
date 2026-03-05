# @secretdef/backblaze

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Backblaze B2** environment variables.

## Install

```bash
npm install @secretdef/backblaze secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/backblaze';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `B2_APPLICATION_KEY_ID` | Backblaze B2 application key ID | Yes |
| `B2_APPLICATION_KEY` | Backblaze B2 application key | Yes |
| `B2_BUCKET_ID` | Backblaze B2 bucket ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

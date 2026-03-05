# @secretdef/cloudinary-upload

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cloudinary Upload** environment variables.

## Install

```bash
npm install @secretdef/cloudinary-upload secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cloudinary-upload';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

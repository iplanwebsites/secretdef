# @secretdef/imgix

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **imgix** environment variables.

## Install

```bash
npm install @secretdef/imgix secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/imgix';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IMGIX_API_KEY` | imgix management API key | Yes |
| `IMGIX_DOMAIN` | imgix source domain | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

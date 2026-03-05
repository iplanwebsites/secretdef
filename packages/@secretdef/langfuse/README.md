# @secretdef/langfuse

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Langfuse** environment variables.

## Install

```bash
npm install @secretdef/langfuse secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/langfuse';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LANGFUSE_PUBLIC_KEY` | Langfuse public key | Yes |
| `LANGFUSE_SECRET_KEY` | Langfuse secret key | Yes |
| `LANGFUSE_BASEURL` | Langfuse base URL (self-hosted) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

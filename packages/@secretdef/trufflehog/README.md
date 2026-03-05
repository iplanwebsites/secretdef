# @secretdef/trufflehog

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **TruffleHog** environment variables.

## Install

```bash
npm install @secretdef/trufflehog secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/trufflehog';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TRUFFLEHOG_API_KEY` | TruffleHog API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

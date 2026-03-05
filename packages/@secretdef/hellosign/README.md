# @secretdef/hellosign

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Dropbox Sign (HelloSign)** environment variables.

## Install

```bash
npm install @secretdef/hellosign secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hellosign';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HELLOSIGN_API_KEY` | Dropbox Sign API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

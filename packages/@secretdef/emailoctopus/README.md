# @secretdef/emailoctopus

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **EmailOctopus** environment variables.

## Install

```bash
npm install @secretdef/emailoctopus secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/emailoctopus';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAILOCTOPUS_API_KEY` | EmailOctopus API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

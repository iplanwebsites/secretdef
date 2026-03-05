# @secretdef/people-data-labs

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **People Data Labs** environment variables.

## Install

```bash
npm install @secretdef/people-data-labs secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/people-data-labs';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PDL_API_KEY` | People Data Labs API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

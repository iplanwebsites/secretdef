# @secretdef/synthesia

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Synthesia** environment variables.

## Install

```bash
npm install @secretdef/synthesia secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/synthesia';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SYNTHESIA_API_KEY` | Synthesia video API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

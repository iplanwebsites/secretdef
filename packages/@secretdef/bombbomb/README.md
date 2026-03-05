# @secretdef/bombbomb

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BombBomb** environment variables.

## Install

```bash
npm install @secretdef/bombbomb secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bombbomb';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOMBBOMB_API_KEY` | BombBomb API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

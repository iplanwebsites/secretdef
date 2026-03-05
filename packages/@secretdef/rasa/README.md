# @secretdef/rasa

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Rasa** environment variables.

## Install

```bash
npm install @secretdef/rasa secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/rasa';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `RASA_PRO_LICENSE` | Rasa Pro license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

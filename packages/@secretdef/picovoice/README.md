# @secretdef/picovoice

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Picovoice** environment variables.

## Install

```bash
npm install @secretdef/picovoice secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/picovoice';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PICOVOICE_ACCESS_KEY` | Picovoice access key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

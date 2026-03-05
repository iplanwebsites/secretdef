# @secretdef/cosmic

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Cosmic** environment variables.

## Install

```bash
npm install @secretdef/cosmic secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cosmic';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COSMIC_BUCKET_SLUG` | Cosmic bucket slug | Yes |
| `COSMIC_READ_KEY` | Cosmic read key | Yes |
| `COSMIC_WRITE_KEY` | Cosmic write key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

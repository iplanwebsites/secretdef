# @secretdef/beams

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pusher Beams** environment variables.

## Install

```bash
npm install @secretdef/beams secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/beams';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BEAMS_INSTANCE_ID` | Pusher Beams instance ID | Yes |
| `BEAMS_SECRET_KEY` | Pusher Beams secret key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

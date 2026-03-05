# @secretdef/mparticle

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **mParticle** environment variables.

## Install

```bash
npm install @secretdef/mparticle secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mparticle';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MPARTICLE_API_KEY` | mParticle API key | Yes |
| `MPARTICLE_API_SECRET` | mParticle API secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

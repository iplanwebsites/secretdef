# @secretdef/astro-deploy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Astronomer (Astro)** environment variables.

## Install

```bash
npm install @secretdef/astro-deploy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/astro-deploy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ASTRO_API_TOKEN` | Astronomer Astro API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

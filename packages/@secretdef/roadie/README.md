# @secretdef/roadie

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Roadie** environment variables.

## Install

```bash
npm install @secretdef/roadie secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/roadie';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `ROADIE_API_TOKEN` | Roadie (Backstage) API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

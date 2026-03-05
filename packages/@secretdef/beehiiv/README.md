# @secretdef/beehiiv

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **beehiiv** environment variables.

## Install

```bash
npm install @secretdef/beehiiv secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/beehiiv';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BEEHIIV_API_KEY` | beehiiv API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

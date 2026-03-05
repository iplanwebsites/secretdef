# @secretdef/shodan

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Shodan** environment variables.

## Install

```bash
npm install @secretdef/shodan secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/shodan';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SHODAN_API_KEY` | Shodan API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

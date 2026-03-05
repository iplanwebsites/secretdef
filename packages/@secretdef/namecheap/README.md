# @secretdef/namecheap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Namecheap** environment variables.

## Install

```bash
npm install @secretdef/namecheap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/namecheap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NAMECHEAP_API_USER` | Namecheap API username | Yes |
| `NAMECHEAP_API_KEY` | Namecheap API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

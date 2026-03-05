# @secretdef/hetzner-dns

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hetzner DNS** environment variables.

## Install

```bash
npm install @secretdef/hetzner-dns secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hetzner-dns';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HETZNER_DNS_TOKEN` | Hetzner DNS API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/hcloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Hetzner Cloud CLI** environment variables.

## Install

```bash
npm install @secretdef/hcloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hcloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HCLOUD_TOKEN` | Hetzner Cloud API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

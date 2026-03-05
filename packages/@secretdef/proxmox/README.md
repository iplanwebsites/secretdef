# @secretdef/proxmox

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Proxmox** environment variables.

## Install

```bash
npm install @secretdef/proxmox secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/proxmox';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROXMOX_API_TOKEN` | Proxmox API token | Yes |
| `PROXMOX_URL` | Proxmox server URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

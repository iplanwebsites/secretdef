# @secretdef/hashicorp-nomad

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HashiCorp Nomad** environment variables.

## Install

```bash
npm install @secretdef/hashicorp-nomad secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hashicorp-nomad';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `NOMAD_TOKEN` | Nomad ACL token | Yes |
| `NOMAD_ADDR` | Nomad server address | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

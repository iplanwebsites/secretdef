# @secretdef/hashicorp-consul

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **HashiCorp Consul** environment variables.

## Install

```bash
npm install @secretdef/hashicorp-consul secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/hashicorp-consul';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CONSUL_HTTP_TOKEN` | Consul ACL token | Yes |
| `CONSUL_HTTP_ADDR` | Consul server address | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

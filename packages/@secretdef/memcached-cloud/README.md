# @secretdef/memcached-cloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Memcached Cloud** environment variables.

## Install

```bash
npm install @secretdef/memcached-cloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/memcached-cloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MEMCACHEDCLOUD_SERVERS` | Memcached Cloud server address | Yes |
| `MEMCACHEDCLOUD_USERNAME` | Memcached Cloud username | Yes |
| `MEMCACHEDCLOUD_PASSWORD` | Memcached Cloud password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

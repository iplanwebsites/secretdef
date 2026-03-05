# @secretdef/digitalocean

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **DigitalOcean** environment variables.

## Install

```bash
npm install @secretdef/digitalocean secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/digitalocean';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `DIGITALOCEAN_ACCESS_TOKEN` | DigitalOcean personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

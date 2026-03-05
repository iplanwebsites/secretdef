# @secretdef/owncloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ownCloud** environment variables.

## Install

```bash
npm install @secretdef/owncloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/owncloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OWNCLOUD_URL` | ownCloud instance URL | Yes |
| `OWNCLOUD_USERNAME` | ownCloud username | Yes |
| `OWNCLOUD_PASSWORD` | ownCloud password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

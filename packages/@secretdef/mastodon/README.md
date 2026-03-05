# @secretdef/mastodon

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Mastodon** environment variables.

## Install

```bash
npm install @secretdef/mastodon secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/mastodon';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `MASTODON_ACCESS_TOKEN` | Mastodon access token | Yes |
| `MASTODON_INSTANCE_URL` | Mastodon instance URL | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

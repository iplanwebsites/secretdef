# @secretdef/wonderpush

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **WonderPush** environment variables.

## Install

```bash
npm install @secretdef/wonderpush secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/wonderpush';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WONDERPUSH_ACCESS_TOKEN` | WonderPush access token | Yes |
| `WONDERPUSH_APPLICATION_ID` | WonderPush application ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

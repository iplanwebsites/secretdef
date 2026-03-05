# @secretdef/common-room

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Common Room** environment variables.

## Install

```bash
npm install @secretdef/common-room secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/common-room';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `COMMON_ROOM_API_TOKEN` | Common Room API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

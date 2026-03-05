# @secretdef/box

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Box** environment variables.

## Install

```bash
npm install @secretdef/box secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/box';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOX_CLIENT_ID` | Box OAuth client ID | Yes |
| `BOX_CLIENT_SECRET` | Box OAuth client secret | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

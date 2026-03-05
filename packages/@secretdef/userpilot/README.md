# @secretdef/userpilot

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Userpilot** environment variables.

## Install

```bash
npm install @secretdef/userpilot secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/userpilot';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `USERPILOT_TOKEN` | Userpilot API token | Yes |
| `USERPILOT_APP_ID` | Userpilot app ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/clicksend

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ClickSend** environment variables.

## Install

```bash
npm install @secretdef/clicksend secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clicksend';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLICKSEND_USERNAME` | ClickSend API username | Yes |
| `CLICKSEND_API_KEY` | ClickSend API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/protocol

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Protocol** environment variables.

## Install

```bash
npm install @secretdef/protocol secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/protocol';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PROTOCOL_API_KEY` | Protocol API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

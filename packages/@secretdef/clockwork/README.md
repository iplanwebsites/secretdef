# @secretdef/clockwork

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Clockwork SMS** environment variables.

## Install

```bash
npm install @secretdef/clockwork secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/clockwork';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CLOCKWORK_API_KEY` | Clockwork SMS API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

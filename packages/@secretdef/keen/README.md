# @secretdef/keen

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Keen.io** environment variables.

## Install

```bash
npm install @secretdef/keen secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/keen';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `KEEN_PROJECT_ID` | Keen.io project ID | Yes |
| `KEEN_WRITE_KEY` | Keen.io write key | Yes |
| `KEEN_READ_KEY` | Keen.io read key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

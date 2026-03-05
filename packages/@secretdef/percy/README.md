# @secretdef/percy

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Percy (BrowserStack)** environment variables.

## Install

```bash
npm install @secretdef/percy secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/percy';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PERCY_TOKEN` | Percy token for visual testing | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

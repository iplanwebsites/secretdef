# @secretdef/blynk

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Blynk** environment variables.

## Install

```bash
npm install @secretdef/blynk secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/blynk';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BLYNK_TOKEN` | Blynk auth token | Yes |
| `BLYNK_SERVER` | Blynk server URL | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/cordova

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Apache Cordova** environment variables.

## Install

```bash
npm install @secretdef/cordova secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/cordova';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CORDOVA_KEY_STORE_PASSWORD` | Cordova keystore password for Android signing | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

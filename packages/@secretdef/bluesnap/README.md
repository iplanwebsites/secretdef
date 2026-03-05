# @secretdef/bluesnap

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **BlueSnap** environment variables.

## Install

```bash
npm install @secretdef/bluesnap secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bluesnap';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BLUESNAP_USERNAME` | BlueSnap API username | Yes |
| `BLUESNAP_PASSWORD` | BlueSnap API password | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

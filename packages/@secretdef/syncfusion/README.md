# @secretdef/syncfusion

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Syncfusion** environment variables.

## Install

```bash
npm install @secretdef/syncfusion secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/syncfusion';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `SYNCFUSION_LICENSE_KEY` | Syncfusion license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

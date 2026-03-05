# @secretdef/chartmogul

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ChartMogul** environment variables.

## Install

```bash
npm install @secretdef/chartmogul secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/chartmogul';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `CHARTMOGUL_API_KEY` | ChartMogul API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

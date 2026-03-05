# @secretdef/amcharts

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **amCharts** environment variables.

## Install

```bash
npm install @secretdef/amcharts secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/amcharts';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AMCHARTS_LICENSE` | amCharts license key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

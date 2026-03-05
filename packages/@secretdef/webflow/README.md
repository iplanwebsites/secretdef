# @secretdef/webflow

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Webflow** environment variables.

## Install

```bash
npm install @secretdef/webflow secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/webflow';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WEBFLOW_API_TOKEN` | Webflow API token | Yes |
| `WEBFLOW_SITE_ID` | Webflow site ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

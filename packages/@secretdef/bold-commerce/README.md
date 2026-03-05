# @secretdef/bold-commerce

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Bold Commerce** environment variables.

## Install

```bash
npm install @secretdef/bold-commerce secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/bold-commerce';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `BOLD_API_KEY` | Bold Commerce API key | Yes |
| `BOLD_API_TOKEN` | Bold Commerce API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/umami

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Umami** environment variables.

## Install

```bash
npm install @secretdef/umami secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/umami';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `UMAMI_WEBSITE_ID` | Umami website ID | Yes |
| `UMAMI_API_KEY` | Umami API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

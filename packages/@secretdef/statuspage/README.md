# @secretdef/statuspage

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Statuspage (Atlassian)** environment variables.

## Install

```bash
npm install @secretdef/statuspage secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/statuspage';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `STATUSPAGE_API_KEY` | Statuspage API key | Yes |
| `STATUSPAGE_PAGE_ID` | Statuspage page ID | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

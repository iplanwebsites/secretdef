# @secretdef/tavily

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Tavily** environment variables.

## Install

```bash
npm install @secretdef/tavily secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/tavily';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `TAVILY_API_KEY` | Tavily search API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

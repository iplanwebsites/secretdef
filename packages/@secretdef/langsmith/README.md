# @secretdef/langsmith

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **LangSmith** environment variables.

## Install

```bash
npm install @secretdef/langsmith secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/langsmith';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `LANGSMITH_API_KEY` | LangSmith API key | Yes |
| `LANGCHAIN_PROJECT` | LangChain project name | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

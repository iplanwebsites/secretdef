# @secretdef/ollama

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Ollama** environment variables.

## Install

```bash
npm install @secretdef/ollama secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/ollama';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OLLAMA_HOST` | Ollama server host URL | No |
| `OLLAMA_API_KEY` | Ollama API key (if auth enabled) | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

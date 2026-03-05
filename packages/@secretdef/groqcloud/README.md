# @secretdef/groqcloud

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **GroqCloud (Whisper)** environment variables.

## Install

```bash
npm install @secretdef/groqcloud secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/groqcloud';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_WHISPER_API_KEY` | GroqCloud Whisper API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

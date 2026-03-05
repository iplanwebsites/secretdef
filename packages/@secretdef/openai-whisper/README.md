# @secretdef/openai-whisper

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **OpenAI Whisper (self-hosted)** environment variables.

## Install

```bash
npm install @secretdef/openai-whisper secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/openai-whisper';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `WHISPER_API_URL` | Whisper API URL | Yes |
| `WHISPER_API_KEY` | Whisper API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

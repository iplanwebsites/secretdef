# @secretdef/gcp-speech

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Google Cloud Speech-to-Text** environment variables.

## Install

```bash
npm install @secretdef/gcp-speech secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/gcp-speech';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_SPEECH_API_KEY` | Google Cloud Speech API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

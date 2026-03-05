# @secretdef/imageai

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **ImageAI** environment variables.

## Install

```bash
npm install @secretdef/imageai secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/imageai';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `IMAGEAI_API_KEY` | ImageAI API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

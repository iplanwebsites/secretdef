# @secretdef/pixabay

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Pixabay** environment variables.

## Install

```bash
npm install @secretdef/pixabay secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/pixabay';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `PIXABAY_API_KEY` | Pixabay API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

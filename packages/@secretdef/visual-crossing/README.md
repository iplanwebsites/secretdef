# @secretdef/visual-crossing

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Visual Crossing Weather** environment variables.

## Install

```bash
npm install @secretdef/visual-crossing secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/visual-crossing';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `VISUAL_CROSSING_API_KEY` | Visual Crossing weather API key | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

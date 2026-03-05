# @secretdef/highlight

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Highlight.io** environment variables.

## Install

```bash
npm install @secretdef/highlight secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/highlight';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `HIGHLIGHT_PROJECT_ID` | Highlight project ID | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

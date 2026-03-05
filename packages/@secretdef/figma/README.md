# @secretdef/figma

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Figma** environment variables.

## Install

```bash
npm install @secretdef/figma secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/figma';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `FIGMA_ACCESS_TOKEN` | Figma personal access token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

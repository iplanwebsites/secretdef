# @secretdef/obsidian-publish

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Obsidian Publish** environment variables.

## Install

```bash
npm install @secretdef/obsidian-publish secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/obsidian-publish';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `OBSIDIAN_API_TOKEN` | Obsidian Publish API token | Yes |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library

# @secretdef/agility-cms

Like `@types` but for environment variables — so your app (and AI coding agents) know exactly which secrets are needed before runtime.

Pre-built [secretdef](https://www.npmjs.com/package/secretdef) definitions for **Agility CMS** environment variables.

## Install

```bash
npm install @secretdef/agility-cms secretdef
```

## Usage

```ts
import { validateSecrets } from 'secretdef';
import '@secretdef/agility-cms';

validateSecrets();
```

## Secrets

| Variable | Description | Required |
|----------|-------------|----------|
| `AGILITY_GUID` | Agility CMS GUID | Yes |
| `AGILITY_API_FETCH_KEY` | Agility CMS fetch API key | Yes |
| `AGILITY_API_PREVIEW_KEY` | Agility CMS preview API key | No |

## Links

- [secretdef.com](https://secretdef.com) — Full documentation
- [secretdef on npm](https://www.npmjs.com/package/secretdef) — Core library
